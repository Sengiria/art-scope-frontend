import React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps {
  text: string
  highlight: string
  icon: string
  iconLarge?: string
  onClick?: () => void
  backgroundUrl: string
  gradientFrom: string
  gradientTo: string
  highlightColor: string
  shadowColor: string
  disabled?: boolean
}

// TODO: Might not need that much customization as we use the save styles twice
const Button: React.FC<ButtonProps> = ({
  text,
  highlight,
  icon,
  iconLarge,
  onClick,
  backgroundUrl,
  gradientFrom,
  gradientTo,
  highlightColor,
  shadowColor,
  disabled = false,
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={`${text} ${highlight}`}
      style={{
        backgroundImage: `linear-gradient(to bottom, ${gradientFrom}, ${gradientTo}), url(${backgroundUrl})`,
      }}
      className={cn(
        "group relative w-full overflow-hidden rounded-md px-[60px] py-3 sm:py-4 text-lg font-oswald text-white transition-all duration-500 cursor-pointer border-2 border-rose-700",
        "hover:bg-[position:0_30%] bg-[length:110%] bg-center bg-no-repeat",
        `shadow-[0_0_0_2px_rgba(255,255,255,0.16)_inset,_0_0_10px_0]`,
        `hover:shadow-[0_0_0_2px_rgba(255,255,255,0.16)_inset,_0_0_30px_0_${shadowColor}]`,
        `focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-500`
      )}
    >
      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-2xl transition-transform duration-500 group-hover:scale-[1.2] text-shadow">
        {icon}
      </span>

      <span className="text-shadow">{text} <b className={cn("font-bold", highlightColor)}>{highlight}</b></span>
      <span
        className="absolute top-[-17px] right-[-120px] text-[100px] opacity-30 transition-all duration-500 group-hover:right-[-40px] group-hover:scale-100 text-shadow"
        aria-hidden="true"
      >
        {iconLarge || icon}
      </span>
    </button>
  );
};

export default Button;
