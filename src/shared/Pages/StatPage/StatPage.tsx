import { DayInfo } from "@/shared/DayInfo";
import { PomidoroChart } from "@/shared/PomidoroChart";
import { StatCard } from "@/shared/StatCard";
import { StatHeader } from "@/shared/StatHeader";
import { TomatoCountInfometr } from "@/shared/TomatoCountInfometr";

import Stop from "@assets/img/stop.svg?react";
import Time from "@assets/img/time.svg?react";
import Focus from "@assets/img/focus.svg?react";
import { useState } from "react";

export const StatPage = () => {
  const [choosenWeek, setChoosenWeek] = useState(0);

  return (
    <div className="scaleIn df fd-c gap20">
      <StatHeader setChoosenWeek={setChoosenWeek} />
      <div className="df gap20">
        <div className="df fd-c gap20">
          <DayInfo />
          <TomatoCountInfometr tomatoQantity={10} />
        </div>
        <PomidoroChart choosenWeek={choosenWeek} />
      </div>
      <div className="df gap20">
        <StatCard title="Фокус" info={"0%"} Img={Focus} />
        <StatCard title="Время на паузе" info={"0м"} Img={Time} />
        <StatCard title="Остановки" info={"0"} Img={Stop} />
      </div>
    </div>
  );
};
