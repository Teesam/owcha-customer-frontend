import type { ReactNode } from "react";
import useInView from "../../hooks/useInView";

type AnimatedCardProps = {
  children: ReactNode;
  className?: string;
  from?: "left" | "right" | "bottom";
};

const AnimatedCard = ({ children, className = "", from = "right" }: AnimatedCardProps) => {
  const { ref, isVisible } = useInView<HTMLDivElement>();

  const translate = from === "left" 
    ? "translate-x-[-50px]" 
    : from === "bottom" 
    ? "translate-y-[50px]" 
    : "translate-x-[50px]";

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-in-out 
        ${isVisible ? "opacity-100 translate-x-0 translate-y-0" : `opacity-0 ${translate}`} 
        ${className}`}
    >
      {children}
    </div>
  );
};

export default AnimatedCard;
