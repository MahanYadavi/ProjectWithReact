import { useEffect, useRef } from 'react';
import { useInView, animate } from 'framer-motion';

type CounterProps = {
  from: number;
  to: number;
  suffix?: string;
};

function Counter({ from, to, suffix = '' }: CounterProps) {
  const nodeRef = useRef<HTMLParagraphElement>(null);
  const isInView = useInView(nodeRef, { once: true });

  useEffect(() => {
    if (!isInView) return;

    const node = nodeRef.current;
    if (!node) return;

    const controls = animate(from, to, {
      duration: 1.5,
      onUpdate(value) {
        node.textContent = Math.round(value).toString() + suffix;
      },
    });

    return () => controls.stop();
  }, [from, to, isInView, suffix]);

  return <p ref={nodeRef}>{from}{suffix}</p>;
}

export default Counter;
