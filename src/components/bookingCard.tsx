'use client';

import React, { useMemo, useState } from 'react';
import '../styles/bookingCard/bookingCard.style.css';
import { DateSelectSlider } from '@/components/sliders/DateSelectSlider';
import { TimeSelectSlider } from '@/components/sliders/TimeSelectSlider';
import { AvatarBlock } from '@/components/avatarBlock/avatarBlock';
import { SubmitButton } from '@/components/submitButton/submitButton';
import { getSlotList } from '@/utils/getSlotList';
import { useDays } from '@/hooks/useDays';
import { MobileTopBlock } from '@/components/mobileTopBlock/mobileTopBlock';

function BookingCard(): React.JSX.Element {
  const { days } = useDays(42);

  const [selectedDate, setSelectedDate] = useState<Date | null>(days[0]);
  const [selectedSlot, setSelectedSlot] = useState<Date | null>(null);

  const slots = useMemo(() => getSlotList(selectedDate), [selectedDate]);

  const handleConfirm = () => {
    if (!selectedDate || !selectedSlot) return;
    const timestampSeconds = Math.floor(selectedSlot.getTime() / 1000);
    alert(`Logged timestamp: ${timestampSeconds}`);
  };

  const avatarElement = <AvatarBlock />;

  const dateSelectElement = (
    <DateSelectSlider
      selectedDate={selectedDate}
      days={days}
      onSelectDate={(d) => {
        setSelectedDate(d);
        setSelectedSlot(null);
      }}
    />
  );

  const timeSelectElement = (
    <TimeSelectSlider
      isSelectedSlot={!!selectedDate}
      slots={slots}
      selectedSlot={selectedSlot}
      onSelectSlot={(value) => setSelectedSlot(value)}
    />
  );
  const buttonElement = (
    <SubmitButton
      handleConfirm={handleConfirm}
      isActive={!!selectedDate && !!selectedSlot}
      isDisabled={!selectedDate || !selectedSlot}
    />
  );

  const mobileElement = <MobileTopBlock />;

  const formContainerElement = (
    <div className="bg-white h-full relative z-[2] md:rounded-2xl rounded-t-2xl shadow-2xl  md:w-[568px] w-full shadow-[#00000040] max-w-full pl-[20px] pr-0 p-5 md:px-6 px-0 md:py-10 flex flex-col md:gap-8 gap-4">
      {avatarElement}
      {dateSelectElement}
      {timeSelectElement}
      {buttonElement}
    </div>
  );

  const formWrapperElement = (
    <div
      className="md:min-h-screen h-full md:h-[unset]
     flex flex-col md:justify-center justify-start mt-[100px] md:mt-0 items-start md:items-center mb:justify-center  md:p-6"
    >
      {mobileElement}
      <div className="fixed top-[25vw]  bg-[#cc7225] right-[-16vw] sm:min-h-0 min-h-[540] block md:hidden z-[1] w-[250px] h-[250px]  border-4 border-[#FFAD32] rounded-full" />
      {formContainerElement}
    </div>
  );

  return formWrapperElement;
}
export default BookingCard;
