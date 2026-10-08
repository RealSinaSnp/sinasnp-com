1. LayoutClient.tsx
What it does: This is the top-level wrapper for your entire website. It sits inside app/layout.tsx.
Why it exists: app/layout.tsx is a Server Component, meaning it can't run React hooks or Context Providers. However, things like Dark Mode (ThemeProvider from next-themes) and User Login (SessionProvider from next-auth) require React Context to work. LayoutClient acts as a "Client boundary" to provide those global states to the rest of the app. It also uses usePathname() to check if the user is on the /blog route so it can load HeaderBlog instead of the standard portfolio header.
2. InfoCard1.tsx
What it does: This is the large interactive card component used for your "Web Development" and "Network Engineering" sections.
Why it exists: It handles the complex logic for the "Maximize" feature. It uses framer-motion to handle smooth animations. By default, it shows a short text description and the scrolling logos (LogoBox). When you click the maximize icon in the corner, it triggers an AnimatePresence modal to take up the full screen and show the detailed breakdown of your skills.
3. InfoCardContext.tsx
What it does: The name here is slightly misleading—it’s not a React Context API! It's actually the UI sub-component that renders the "Content" inside the maximized InfoCard1.
Why it exists: When a user expands InfoCard1, this component takes your giant list of skills, groups them by category (e.g., Frontend, Backend, Database), and renders them as little tags. It even contains the logic to check if a skill is mastered (coloring it Teal) or still learning (coloring it Yellow), and surrounds them with those fading gradient borders.
4. InfoCard2.tsx
What it does: This is the smaller, squarer card component used for your "Programming Languages" and "Interests" sections at the bottom.
Why it exists: Unlike InfoCard1, this component doesn't expand. Instead, its main feature is the 3D tilt and glass hover effect. It uses an onMouseMove event to calculate exactly where your cursor is on the card. It then dynamically changes the rotateX and rotateY CSS properties to make the card "tilt" towards your mouse, and applies a subtle radial gradient (the "glass highlight") that follows your cursor around the component. It also renders the progress bars based on the level you set for each skill.

In summary:

LayoutClient handles global setup (theme, auth, headers).
InfoCard1 is for the big expandable sections.
InfoCardContext is the data layout injected inside an expanded InfoCard1.
InfoCard2 is for the smaller sections with 3D mouse-tracking effects.