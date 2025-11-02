import Slider from 'react-slick';
import { format, isLastDayOfMonth, isSameDay } from 'date-fns';
import React, { FunctionComponent } from 'react';
import { dateSliderSettings } from '@/constants/sliderConfigs';
import { DateSliderProps } from '@/types/components/slider';

export const DateSelectSlider: FunctionComponent<DateSliderProps> = ({
  selectedDate,
  days = [],
  onSelectDate = () => {},
}) => {
  const sliderElement = (
    <Slider {...dateSliderSettings}>
      {(days || []).map((d, i) => {
        const isSelected = selectedDate && isSameDay(d, selectedDate);
        const showStartOfMonthLabel = i === 0 || format(d, 'MMM') !== format(days[i - 1], 'MMM');
        const showEndOfMonthLabel = isLastDayOfMonth(d);

        const monthLabelElement = (
          <span className="text-gray-400 min-h-[19px] text-xs font-medium mb-1 block">
            {(showStartOfMonthLabel || showEndOfMonthLabel) && <>{format(d, 'MMM')}</>}
          </span>
        );

        const itemLabelsElement = (
          <>
            <span className="text-base font-normal">{format(d, 'EEE')}</span>
            <span className="text-base font-semibold">{format(d, 'd')}</span>
          </>
        );

        const itemElement = (
          <button
            type="button"
            onClick={() => {
              onSelectDate(d);
            }}
            className={`h-[64px] w-full md:w-[64px] w-max-[64px] flex flex-col items-center justify-center py-2 rounded-lg border transition-colors ${
              isSelected
                ? 'bg-pink-50 text-[#DE3A6B] border-none shadow-md'
                : 'bg-white border-gray-200 text-[#16171B] hover:bg-gray-100'
            }`}
          >
            {itemLabelsElement}
          </button>
        );

        const itemWrapperElement = (
          <div key={d.toISOString()} className="px-1 relative">
            {monthLabelElement}
            {itemElement}
          </div>
        );

        return itemWrapperElement;
      })}
    </Slider>
  );

  const sectionElement = (
    <section className="relative pt-5 md:px-4 px-0 date-section">{sliderElement}</section>
  );

  return sectionElement;
};
