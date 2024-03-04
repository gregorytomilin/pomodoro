export const getCurrentDay = (params?: string) => {
  const daysOfWeek = [
    "понедельник",
    "вторник",
    "среда",
    "четверг",
    "пятница",
    "суббота",
    "воскресенье",
  ];
  const today = new Date();
  console.log(today.getDay());

  if (params) {
    switch (params) {
      case "dayNumber":
        return today.getDay() === 0 ? 7 : today.getDay();

      default:
    }
  }
  return daysOfWeek[today.getDay() === 0 ? 6 : today.getDay() - 1];
};

export const getDate = () => {
  const currentDate = new Date(); // Получаем текущую дату и время
  const day = currentDate.getDate().toString().padStart(2, "0"); // Получаем день месяца и добавляем ведущий ноль при необходимости
  const month = (currentDate.getMonth() + 1).toString().padStart(2, "0"); // Получаем месяц (индекс начинается с 0) и добавляем ведущий ноль при необходимости
  const year = currentDate.getFullYear(); // Получаем год

  return `${day}.${month}.${year}`;
};
