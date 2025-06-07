// components/LogoBox.tsx
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
// import { InfiniteScroller } from '@/components/InfiniteScroll';

interface LogoBoxProps {
  logos: string[];
  speed?: 'slow' | 'fast';
  direction?: 'left' | 'right';
}

const LogoBox: React.FC<LogoBoxProps> = ({
  logos,
  speed = 'slow',
  direction = 'left',
}) => {
  const scrollerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
      const scroller = scrollerRef.current;
      if (!scroller || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  
      scroller.setAttribute('data-animated', 'true');
  
      const inner = scroller.querySelector('.scroller__inner');
      if (!inner) return;
  
      const children = Array.from(inner.children);
      children.forEach((child) => {
        const clone = child.cloneNode(true) as HTMLElement;
        clone.setAttribute('aria-hidden', 'true');
        inner.appendChild(clone);
      });
    }, []);


  return (
    <div className="w-full py-0 overflow-hidden">
      <div className="max-w-7lg lg:max-w-lg mx-auto ">
        
          <div
      ref={scrollerRef}
      className="scroller max-w-7xl"
      data-speed={speed}
      data-direction={direction}
    >
      <div className="scroller__inner">
        {logos.map((item, i) => (
          <div key={i} className="scroller__item">
            <Image src={item}
              alt={`Logo-${i}`}
              className="inline-block w-16 h-16 mx-2 my-2 object-contain"
              width={300}
              height={300}
            />
          </div>
        ))}
      </div>
    </div>
      </div>
    </div>
  );
};

export default LogoBox;
