import React from "react";
import classes from "./statcard.module.css";

interface StatCardProps {
  Img: React.FC;
  title: string;
  info: string;
  style: string;
}
export const StatCard = (props: StatCardProps) => {
  const { Img, title, info, style } = props;

  return (
    <div
      className={`${classes.statCard} card ${style ? classes[style] : ""}`}
      style={{ flex: 1 }}
    >
      <div className="df fd-c gap20">
        <span className="fs24 fw-b">{title}</span>
        <span className="fs64 fw-400">{info}</span>
      </div>
      <Img />
    </div>
  );
};
