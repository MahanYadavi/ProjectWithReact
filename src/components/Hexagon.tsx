import { cn } from '../utils/cn.tsx';

interface HexagonProps {
  text: string;
  color: 'yellow' | 'brown' | 'grey';
  className?: string;
}

export const Hexagon = ({ text, color, className }: HexagonProps) => {
  const colorClasses = {
    yellow: 'bg-[#f0e68c] text-blue-900 hover:bg-[#e6db74]', // Khaki / Yellow
    brown: 'bg-[#8b7e40] text-white hover:bg-[#7a6e35]', // Olive Drab / Brown
    grey: 'bg-[#555555] text-white hover:bg-[#444444]', // Dark Grey
  };

  return (
    // کانتینر اصلی که سایه را نگه می‌دارد
    <div className={cn("relative w-32 h-28 md:w-36 md:h-32 flex items-center justify-center drop-shadow-xl filter transition-transform duration-300 hover:scale-110 cursor-default", className)}>
      <div 
        className={cn(
          "w-full h-full flex items-center justify-center text-center px-3 font-bold text-sm md:text-base select-none clip-hexagon leading-tight",
          colorClasses[color]
        )}
      >
        <span className="z-10 max-w-[80%]">{text}</span>
      </div>
    </div>
  );
};
