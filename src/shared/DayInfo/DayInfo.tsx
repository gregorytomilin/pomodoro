import { getCurrentDay } from "../lib/date";

interface DayInfo {
  dayName?: string;
  workTime?: number;
}
export const DayInfo = (props: DayInfo) => {
  const { dayName, workTime } = props;
  return (
    <div className="df fd-c f-g gap20 card">
      <span>
        {dayName ? dayName : (getCurrentDay() as string).toUpperCase()}
      </span>
      <span>{workTime ? workTime : "нет данных"}</span>
    </div>
  );
};
