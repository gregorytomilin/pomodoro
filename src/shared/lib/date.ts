export const getDayProps = (params?: string, date?: Date) => {
  const daysOfWeek = [
    "понедельник",
    "вторник",
    "среда",
    "четверг",
    "пятница",
    "суббота",
    "воскресенье",
  ];
  const today = date ?? new Date();

  if (params) {
    switch (params) {
      case "dayNumber":
        return today.getDay() === 0 ? 7 : today.getDay();

      default:
    }
  }
  return daysOfWeek[today.getDay() === 0 ? 6 : today.getDay() - 1];
};

export const getDate = (date?: Date) => {
  const currentDate = date ?? new Date(); // Получаем текущую дату и время
  const day = currentDate.getDate().toString().padStart(2, "0"); // Получаем день месяца и добавляем ведущий ноль при необходимости
  const month = (currentDate.getMonth() + 1).toString().padStart(2, "0"); // Получаем месяц (индекс начинается с 0) и добавляем ведущий ноль при необходимости
  const year = currentDate.getFullYear(); // Получаем год

  return `${day}.${month}.${year}`;
};

export const fromDateToDate = (date: string) => {
  const dateParts = date.split(".");
  return new Date(`${dateParts[1]}.${dateParts[0]}.${dateParts[2]}`);
};

export const secToHoursMinutes = (sec: number | undefined) => {
  if (!sec) return { hours: 0, min: 0 };
  // return `${Math.floor(sec / 3600)} часов ${Math.floor(
  //   (sec % 3600) / 60
  // )} минут`;
  return { hours: Math.floor(sec / 3600), min: Math.floor((sec % 3600) / 60) };
};
