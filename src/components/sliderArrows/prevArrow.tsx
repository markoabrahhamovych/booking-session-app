import Image from 'next/image';
import React from 'react';
import PrevIcon from '@/assets/arrows/prev-icon.svg';
import { SlickArrowProps } from '@/types/components/arrows';

export function PrevArrow({ onClick, currentSlide }: SlickArrowProps) {
  const disabled = currentSlide === 0;

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={`arrow-button arrow-prev absolute  h-10 top-1/2 -translate-y-1/2 z-10 p-1  cursor-pointer transition-colors left-[-20px] ${
        disabled ? 'text-gray-300 cursor-not-allowed' : 'text-gray-700 '
      }`}
    >
      <Image
        src={PrevIcon}
        alt="prev-icon"
        fill
        className={`prev-icon transition-all ${
          disabled
            ? '[filter:brightness(0)_saturate(100%)_invert(83%)_sepia(4%)_saturate(283%)_hue-rotate(201deg)_brightness(96%)_contrast(89%)]'
            : ''
        }`}
      />
    </button>
  );
}
