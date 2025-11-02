import { format, isBefore, isSameDay } from 'date-fns';

export const getSlotList = (selectedDate?: Date | null) => {
  if (!selectedDate) return [];
  const slotsArr = [];
  const startHour = 13;
  const endHour = 18;
  const stepMinutes = 15;

  for (let h = startHour; h < endHour; h += 1) {
    for (let m = 0; m < 60; m += stepMinutes) {
      const dt = new Date(selectedDate);
      dt.setHours(h, m, 0, 0);
      const label = format(dt, 'h:mm a').replace('PM', 'PM');
      slotsArr.push({ date: selectedDate, label, value: new Date(dt) });
    }
  }

  const now = new Date();
  return slotsArr.filter((s) => (isSameDay(selectedDate, now) ? !isBefore(s.value, now) : true));
};
