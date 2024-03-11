import { getDayProps, secToHoursMinutes } from "../lib/date";
import { declOfNum } from "../lib/declOfNum";

interface DayInfo {
  dayName?: string;
  workTime?: number;
}
export const DayInfo = (props: DayInfo) => {
  const { dayName, workTime } = props;

  const { hours, min } = secToHoursMinutes(workTime);
  return (
    <div className="df fd-c f-g gap20 card">
      <span className="fw-b fs24">
        {dayName
          ? dayName.toUpperCase()
          : (getDayProps() as string).toUpperCase()}
      </span>
      <span className="fs18">
        {workTime
          ? `Вы работали над задачами в течение ${hours} ${declOfNum(
            hours,
              ["час", "часов", "часов"]
            )} ${min} ${declOfNum(
              min,
                ["минуты", "минут", "минут"]
              )}`
          : "нет данных"}
      </span>
    </div>
  );
};
