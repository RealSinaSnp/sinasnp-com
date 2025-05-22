import { RateLimiterMemory } from 'rate-limiter-flexible';
import { NextResponse } from 'next/server';
import NextAuth from 'next-auth';
import { authOptions } from '@/lib/authOptions';

// Initialize rate limiter: 5 attempts per 5 minutes per IP, block for 15 minutes
const rateLimiter = new RateLimiterMemory({
  points: 5, // Max 5 attempts
  duration: 5 * 60, // Per 5 minutes
  blockDuration: 15 * 60, // Block for 15 minutes if limit exceeded
});

// Create NextAuth handler
const handler = NextAuth(authOptions);

export async function GET(req: Request, context: { params: Promise<{ nextauth: string[] }> }) {
  const { nextauth } = await context.params; // Await params
  return handler(req, { params: { nextauth } });
}

export async function POST(req: Request, context: { params: Promise<{ nextauth: string[] }> }) {
  const { nextauth } = await context.params; // Await params

  // Log and reject unexpected _log requests
  if (nextauth.includes('_log')) {
    console.warn('Unexpected request to /api/auth/_log', { url: req.url, method: req.method });
    return NextResponse.json({ error: 'Invalid auth endpoint' }, { status: 400 });
  }

  // Apply rate limiting only for signin requests
  if (nextauth.includes('signin')) {
    const ip = req.headers.get('x-forwarded-for')?.split(',')[0] || 'unknown';
    try {
      await rateLimiter.consume(ip);
    } catch (err) {
      console.error('Rate limit exceeded for IP:', ip, err);
      return NextResponse.json(
        { error: 'Too many login attempts. Please try again later.' },
        { status: 429 }
      );
    }
  }

  return handler(req, { params: { nextauth } });
}