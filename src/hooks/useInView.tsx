import { useEffect, useRef, useState } from "react";
import type { RefObject } from "react";

const useInView = <T extends HTMLElement>(
  options?: IntersectionObserverInit
): { ref: RefObject<T | null>; isVisible: boolean } => { // ✅ return T | null
  const ref = useRef<T | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        setIsVisible(entry.isIntersecting);
      },
      options ?? { threshold: 0.2 }
    );

    observer.observe(node);

    return () => {
      if (node) observer.unobserve(node);
    };
  }, [options]);

  return { ref, isVisible };
}

export default useInView;
