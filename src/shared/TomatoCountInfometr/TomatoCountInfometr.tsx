import Tomato from "@assets/img/tomato.svg?react";
import { declOfNum } from "../lib/declOfNum";

import classes from "./tomatoCounter.module.css";

export const TomatoCountInfometr = ({
  tomatoQuantity: tomatoQantity,
}: {
  tomatoQuantity?: number;
}) => {
  return (
    <div className={`${classes.tomatoCard} card`} style={{ padding: 0 }}>
      <div className="df gap20 ai-c jc-c" style={{ padding: "10px" }}>
        <Tomato />
        {tomatoQantity && <span className="fs24">х{tomatoQantity}</span>}
      </div>

      {tomatoQantity && (
        <div
          className="df jc-c ai-c"
          style={{
            background: "var(--red500)",
            color: "white",
            padding: "10px",
          }}
        >
          {`${tomatoQantity}
          ${declOfNum(tomatoQantity, ["помидор", "помидора", "помидоров"])}
        `}
        </div>
      )}
    </div>
  );
};
