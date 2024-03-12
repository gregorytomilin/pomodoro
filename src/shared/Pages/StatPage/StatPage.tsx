import { DayInfo } from "@/shared/DayInfo";
import { PomidoroChart } from "@/shared/PomidoroChart";
import { StatCard } from "@/shared/StatCard";
import { StatHeader } from "@/shared/StatHeader";
import { TomatoCountInfometr } from "@/shared/TomatoCountInfometr";

import Stop from "@assets/img/stop.svg?react";
import Time from "@assets/img/time.svg?react";
import Focus from "@assets/img/focus.svg?react";
import { useEffect, useState } from "react";
import { DayProgressProps } from "@/shared/store/ProgressStore";
import {
  fromDateToDate,
  getDayProps,
  secToHoursMinutes,
} from "@/shared/lib/date";

export const StatPage = () => {
  const [chosenWeek, setChoosenWeek] = useState(0);
  const [selectedDate, setSelectedDate] = useState<null | DayProgressProps>(
    null
  );

  useEffect(() => {
    setSelectedDate(null);
  }, [chosenWeek]);
  return (
    <div className="scaleIn df fd-c gap20">
      <StatHeader setChoosenWeek={setChoosenWeek} />
      <div className="df gap20">
        <div className="df fd-c gap20" style={{ width: "25%" }}>
          <DayInfo
            dayName={
              selectedDate?.dayNumber
                ? (getDayProps(
                    "",
                    fromDateToDate(selectedDate?.date)
                  ) as string)
                : ""
            }
            workTime={selectedDate?.workTime}
          />
          <TomatoCountInfometr tomatoQuantity={selectedDate?.pomidoroQ} />
        </div>
        <PomidoroChart
          chosenWeek={chosenWeek}
          setSelectedDate={(selectedDate) => setSelectedDate(selectedDate)}
        />
      </div>
      <div className="df gap20">
        <StatCard
          title="Фокус"
          info={`${
            ((
              (selectedDate?.pauseTime ?? 0 + (selectedDate?.workTime ?? 0)) /
              (selectedDate?.workTime ?? 1)
            ) * 100).toFixed(0)
          }%`}
          style={selectedDate?.workTime ? "orange" : ""}
          Img={Focus}
        />
        <StatCard
          title="Время на паузе"
          info={`${
            selectedDate?.pauseTime
              ? `${secToHoursMinutes(selectedDate.pauseTime).hours}ч.${
                  secToHoursMinutes(selectedDate.pauseTime).min
                }м.`
              : 0
          }`}
          Img={Time}
          style={selectedDate?.workTime ? "violet" : ""}
        />
        <StatCard
          title="Остановки"
          info={`${selectedDate?.stopsQ ?? 0}`}
          Img={Stop}
          style={selectedDate?.workTime ? "blue" : ""}
        />
      </div>
    </div>
  );
};
