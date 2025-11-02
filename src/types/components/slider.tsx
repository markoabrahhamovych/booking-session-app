export interface DateSliderProps {
  selectedDate?: Date | null;
  days: Date[] | [];
  onSelectDate: (date: Date) => void;
}

export interface TimeSliderProps {
  isSelectedSlot: boolean;
  slots: { value: Date; label: string }[] | [];
  onSelectSlot: (date: Date) => void;
  selectedSlot: Date | null;
}
