export const FAQBlock = () => {
  return (
    <div className="df fd-c" style={{ color: "var(--text-color)" }}>
      <div className="fs24 fw-b">Ура! Теперь можно начать работать:</div>
      <ul className="df fd-c gap10 faq">
        <li className="fs18">
          Выберите категорию и напишите название текущей задачи{" "}
        </li>
        <li className="fs18">Запустите таймер («помидор»)</li>
        <li className="fs18">
          Работайте пока «помидор» не прозвонит Сделайте короткий перерыв (3-5
          минут)
        </li>
        <li className="fs18">
          Продолжайте работать «помидор» за «помидором», пока задача не будут
          выполнена.
        </li>
        <li className="fs18">
          Каждые 4 «помидора» делайте длинный перерыв (15-30 минут).
        </li>
      </ul>
    </div>
  );
};
