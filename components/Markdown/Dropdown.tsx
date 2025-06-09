'use client';

import { useState } from 'react';
import { ChevronRight, ChevronDown } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import rehypeHighlight from 'rehype-highlight';
import "highlight.js/styles/github-dark.css";

type Props = {
  title: string;
  markdown?: string;
};

export default function Dropdown({ title, markdown }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-[#1f1f1f] border border-[#3c3c3c] rounded-lg mb-4">
      <button
        className="flex items-center justify-between w-full px-4 py-3 text-left font-semibold text-white hover:bg-[#2d2d2d] transition"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{title}</span>
        {isOpen ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
      </button>

      {isOpen && markdown && (
        <div className="px-4 py-2 border-t border-[#3c3c3c] text-gray-300 prose prose-invert max-w-none">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeRaw, rehypeHighlight]}
          >
            {markdown}
          </ReactMarkdown>
        </div>
      )}
    </div>
  );
}

