import { useMemo } from 'react';
import { addDays, startOfDay } from 'date-fns';

export const useDays = (count: number = 42) => {
  const today = useMemo(() => startOfDay(new Date()), []);

  const days = useMemo(() => {
    return Array.from({ length: count + 1 }, (_, i) => addDays(today, i));
  }, [today, count]);

  return { today, days };
};
