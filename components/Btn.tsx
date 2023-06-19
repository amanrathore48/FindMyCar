"use client";

import Image from "next/image";
import { BtnProps } from "@/types";

const Btn = ({
  title,
  conStyles,
  btnType,
  textStyles,
  rightIcon,
  handleClick,
}: BtnProps) => {
  return (
    <button
      disabled={false}
      type={btnType || "button"}
      className={`custom-btn ${conStyles}`}
      onClick={handleClick}
    >
      <span className={`flex-1 ${textStyles}`}>{title}</span>
      {rightIcon && (
        <div className="relative w-6 h-6">
          <Image
            src={rightIcon}
            alt="right icon"
            fill
            className="object-contain"
          />
        </div>
      )}
    </button>
  );
};

export default Btn;
