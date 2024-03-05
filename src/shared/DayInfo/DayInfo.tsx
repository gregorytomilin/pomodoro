import { getDayProps } from "../lib/date";

interface DayInfo {
  dayName?: string;
  workTime?: number;
}
export const DayInfo = (props: DayInfo) => {
  const { dayName, workTime } = props;
  return (
    <div className="df fd-c f-g gap20 card">
      <span>
        {dayName
          ? dayName.toUpperCase()
          : (getDayProps() as string).toUpperCase()}
      </span>
      <span>
        {workTime
          ? `Вы работали над задачами в течение ${Math.floor(
              workTime / 3600
            )} часов ${Math.floor((workTime % 3600) / 60)} минут`
          : "нет данных"}
      </span>
    </div>
  );
};
