import React from 'react';

export interface SlickArrowProps {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  currentSlide?: number;
  slideCount?: number;
}
