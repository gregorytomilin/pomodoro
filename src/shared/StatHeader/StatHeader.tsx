export const StatHeader = ({
  setChoosenWeek,
}: {
  setChoosenWeek: (choosenWeek: number) => void;
}) => {
  return (
    <div className="df jc-sb">
      <div className="fs18">Ваша активность</div>
      <select
        name=""
        id=""
        onChange={(e) => setChoosenWeek(Number(e.target.value))}
      >
        <option value="0">Эта неделя</option>
        <option value="-1">Прошлая</option>
        <option value="-2">2 недели назад</option>
      </select>
    </div>
  );
};
