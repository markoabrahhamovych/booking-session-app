import Image from 'next/image';
import React from 'react';
import NextIcon from '@/assets/arrows/next-icon.svg';
import { SlickArrowProps } from '@/types/components/arrows';

export function NextArrow({ onClick, currentSlide, slideCount }: SlickArrowProps) {
  const disabled =
    typeof currentSlide === 'number' &&
    typeof slideCount === 'number' &&
    currentSlide >= slideCount - 1;
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={`arrow-button arrow-next absolute h-10 top-1/2 -translate-y-1/2 z-10 p-1  cursor-pointer right-[-20px] ${
        disabled ? 'text-gray-300 cursor-not-allowed' : 'text-gray-700'
      }`}
    >
      <Image
        src={NextIcon}
        alt="next-icon"
        fill
        className={`next-icon transition-all ${
          disabled
            ? '[filter:brightness(0)_saturate(100%)_invert(83%)_sepia(4%)_saturate(283%)_hue-rotate(201deg)_brightness(96%)_contrast(89%)]'
            : ''
        }`}
      />
    </button>
  );
}
