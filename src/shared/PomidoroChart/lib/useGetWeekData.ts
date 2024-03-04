import { fromDateToDate, getDayProps, getDate } from "@/shared/lib/date";
import { DayProgressProps } from "@/shared/store/ProgressStore";
import { useEffect, useState } from "react";

const getFirstDayOfWeek = (date: Date) => {
  const dayOfWeek = date.getDay(); // Получаем номер дня недели (0 - воскресенье, 1 - понедельник, и т.д.)
  const mondayDiff = dayOfWeek === 0 ? -6 : 1 - dayOfWeek; // Вычисляем разницу между текущим днем и понедельником
  const monday = new Date(date); // Клонируем дату
  monday.setDate(monday.getDate() + mondayDiff); // Перемещаемся к понедельнику
  return monday;
};

// Функция для получения последнего дня недели для заданной даты
const getLastDayOfWeek = (date: Date) => {
  const monday = getFirstDayOfWeek(date); // Получаем первый день недели
  const sunday = new Date(monday); // Клонируем дату
  sunday.setDate(sunday.getDate() + 6); // Перемещаемся к воскресенью (6 дней после понедельника)
  return sunday;
};

const setWeekData = (startDate: Date, weekData: DayProgressProps[]) => {
  for (let i = 0; i <= 6; i++) {
    const fromDate = new Date(startDate);

    fromDate.setDate(fromDate.getDate() + 1 * i);

    const hasDate = weekData.some((item) => {
      return fromDateToDate(item.date).getTime() === fromDate.getTime();
    });

    if (!hasDate)
      weekData.push({
        date: getDate(fromDate),
        dayNumber: getDayProps("dayNumber", fromDate) as number,
      });
  }

  return weekData.sort((a, b) => {
    return a.dayNumber - b.dayNumber;
  });
};
export const useGetWeekData = (data: DayProgressProps[], weeksAgo: number) => {
  const [filteredData, setFilteredData] = useState<DayProgressProps[]>([]);
  useEffect(() => {
    const currentDate = new Date();
    currentDate.setHours(0, 0, 0, 0);
    currentDate.setDate(currentDate.getDate() + 7 * weeksAgo);

    // Определяем текущую дату
    const monday = getFirstDayOfWeek(currentDate);
    const sunday = getLastDayOfWeek(currentDate);

    // Фильтруем массив данных, оставляя только элементы, чья дата находится внутри диапазона от startDate до endDate
    const filteredData = data.filter((item) => {
      const itemDate = fromDateToDate(item.date);

      return itemDate >= monday && itemDate <= sunday;
    });

    setFilteredData(setWeekData(monday, filteredData));
  }, [weeksAgo, data]);

  return filteredData;
};
