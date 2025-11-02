import { PrevArrow } from '@/components/sliderArrows/prevArrow';
import { NextArrow } from '@/components/sliderArrows/nextArrow';

export const dateSliderSettings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 5.8,
  slidesToScroll: 3,
  swipeToSlide: true,
  initialSlide: 0,
  prevArrow: <PrevArrow />,
  nextArrow: <NextArrow />,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 6,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 6,
        arrows: false,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 5.2,
        arrows: false,
      },
    },
  ],
};

export const timeSliderSettings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 4.8,
  slidesToScroll: 3,
  swipeToSlide: true,
  initialSlide: 0,
  prevArrow: <PrevArrow />,
  nextArrow: <NextArrow />,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 6,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 6,
        arrows: false,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 4.2,
        arrows: false,
      },
    },
  ],
};
