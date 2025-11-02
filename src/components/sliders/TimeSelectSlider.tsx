import Slider from 'react-slick';
import React, { FunctionComponent } from 'react';
import { timeSliderSettings } from '@/constants/sliderConfigs';
import { TimeSliderProps } from '@/types/components/slider';

export const TimeSelectSlider: FunctionComponent<TimeSliderProps> = ({
  isSelectedSlot = false,
  slots = [],
  onSelectSlot,
  selectedSlot,
}) => {
  const sliderElement = (
    <Slider {...timeSliderSettings}>
      {(slots || []).map((s) => {
        const isActive = selectedSlot && s.value.getTime() === selectedSlot.getTime();

        const buttonElement = (
          <button
            type="button"
            onClick={() => onSelectSlot(s.value)}
            className={`w-full py-[12px] px-[8px] rounded-[100px] border text-sm font-normal whitespace-nowrap transition-colors ${
              isActive
                ? 'bg-pink-100 text-pink-600 border-none font-medium shadow-md'
                : 'bg-white border-[#E8EBF4] text-gray-800 hover:bg-gray-100'
            }`}
          >
            {s.label}
          </button>
        );

        const buttonWrapperElement = (
          <div key={s.value.toISOString()} className="px-[5px]">
            {buttonElement}
          </div>
        );
        return buttonWrapperElement;
      })}
    </Slider>
  );

  const sectionElement = (
    <section
      key={selectedSlot?.toISOString()}
      className="time-section relative py-2 md:px-4 px-4 md:pl-4 pl-0 md:mb-10"
    >
      {isSelectedSlot ? (
        slots?.length ? (
          sliderElement
        ) : (
          <p className="text-gray-400 text-sm p-2">No available slots for this date.</p>
        )
      ) : (
        <p className="text-gray-400 text-sm p-2">Choose a date first</p>
      )}
    </section>
  );

  return sectionElement;
};
