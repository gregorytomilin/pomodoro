import Tomato from "@assets/img/tomato.svg?react";
import { declOfNum } from "../lib/declOfNum";

import classes from "./tomatoCounter.module.css";

export const TomatoCountInfometr = ({
  tomatoQantity,
}: {
  tomatoQantity?: number;
}) => {
  return (
    <div className={`${classes.tomatoCard} card`}>
      <div className="df gap20 ai-c">
        <Tomato />
        {tomatoQantity && <span className="fs24">х{tomatoQantity}</span>}
      </div>

      {tomatoQantity && (
        <div className="df jc-c">
          {`${tomatoQantity}
          ${declOfNum(tomatoQantity, ["помидор", "помидора", "помидоров"])}
        `}
        </div>
      )}
    </div>
  );
};
