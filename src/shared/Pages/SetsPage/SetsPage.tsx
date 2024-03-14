import Plus from "@assets/svg/plus.svg?react";
import Minus from "@assets/svg/minus.svg?react";
export const SetsPage = () => {
  return (
    <div
      className={`scaleIn`}
      style={{
        width: "100%",
        maxWidth: "800px",
        margin: "auto",
        border: "1px solid #d8d8d8",
        padding: '40px',
        borderRadius: '12px'
      }}
    >
      <div className="df fd-c gap20">
        <div className="df jc-sb ai-c gap20">
          <span className="fs24 fw-b">Помидор</span>.
          <div className="df gap40">
            <div className="roundedButton">
              <Minus />
            </div>
            <div className="roundedButton">
              <Plus />
            </div>
          </div>
        </div>
        <div className="df jc-sb ai-c gap20">
          <span className="fs24 fw-b">Короткий перерыв</span>.
          <div className="df gap40">
            <div className="roundedButton">
              <Minus />
            </div>
            <div className="roundedButton">
              <Plus />
            </div>
          </div>
        </div>
        <div className="df jc-sb ai-c gap20">
          <span className="fs24 fw-b">Длинный перерыв</span>.
          <div className="df gap40">
            <div className="roundedButton">
              <Minus />
            </div>
            <div className="roundedButton">
              <Plus />
            </div>
          </div>
        </div>
        <div className="df jc-sb ai-c gap20">
          <span className="fs24 fw-b">Кнопка добавления времени</span>.
          <div className="df gap40">
            <div className="roundedButton">
              <Minus />
            </div>
            <div className="roundedButton">
              <Plus />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
