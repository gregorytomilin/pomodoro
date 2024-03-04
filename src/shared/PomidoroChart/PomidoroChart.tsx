import { useEffect, useRef } from "react";
import * as echarts from "echarts";
import { $progressStore, EditAction, editDay } from "../store/ProgressStore";
import { useUnit } from "effector-react";

interface chartItem {
  value: number;
  itemStyle?: {
    color?: string;
  };
}

export const PomidoroChart = () => {
  // const [workTimeArray, setWorkTimeArray] = useState<chartItem[]>([]);
  const tasksStore = useUnit($progressStore);

  const getWeeksData = tasksStore;
  console.log(getWeeksData);

  const echartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!echartRef.current) return;

    editDay({ type: EditAction.workTime, value: 10000 });

    echartRef.current.style.height = "450px";

    const seriesData: chartItem[] = [
      { value: 2500 },
      { value: 2000 },
      { value: 7100 },
      { value: 2500 },
      { value: 2500 },
      { value: 800 },
      { value: 2500 },
    ];

    const maxYValue = Math.max(...seriesData.map((obj) => obj.value));

    const interval = (() => {
      switch (true) {
        case maxYValue < 1000:
          return 1800;
        case maxYValue < 7200:
          return 1500;
        default:
          return 3600;
      }
    })();

    const maxYLable =
      Math.ceil(Math.max(...seriesData.map((obj) => obj.value)) / interval) *
      interval;

    const myChart = echarts.init(echartRef.current);

    const option = {
      margin: 0,
      tooltip: {},
      // legend: {
      //   data: ["Label"],
      // },
      xAxis: {
        data: ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"],
      },
      yAxis: {
        position: "right",

        interval,
        max: maxYLable,
        axisLabel: {
          formatter: function (totalSeconds: number) {
            const hours = Math.floor(totalSeconds / 3600);

            // Остаток от деления на 3600 дает количество оставшихся секунд
            const remainingSeconds = totalSeconds % 3600;

            // Вычисляем количество целых минут из оставшихся секунд
            const minutes = Math.floor(remainingSeconds / 60);

            return hours ? `${hours}ч ${minutes} мин` : `${minutes} мин`;
          },
        },
      },
      series: [
        {
          name: "Отработано Часов",
          type: "bar",
          data: seriesData,
          color: "red",
          itemStyle: {
            color: "#EA8A79", // Задаем цвет столбцов
          },
          emphasis: {
            itemStyle: {
              color: "#DC3E22", // Цвет столбцов при наведении
            },
          },
        },
      ],
      responsive: true,
    };
    window.addEventListener("resize", function () {
      myChart.resize();
    });

    myChart.setOption(option);

    myChart.on("click", function (params) {
      option?.series[0]?.data.forEach((data, index) => {
        if (params.dataIndex === index) data.itemStyle = { color: "#DC3E22" };
        else data.itemStyle = { color: "#EA8A79" };
      });
      myChart.setOption(option);
    });
    return () => {
      myChart.dispose();
    };
  }, []);

  return <div className="df f-g card" ref={echartRef}></div>;
};
