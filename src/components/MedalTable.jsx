import "../styles/MedalTable.css";
import Button from "./Button";
const MedalTable = ({ data, handleDeleteButton }) => {
  return (
    <div className="table-box">
      <table className="medal-table">
        <thead>
          <tr style={{ backgroundColor: "#2f4858", height: "50px" }}>
            <th>국가명</th>
            <th>금메달</th>
            <th>은메달</th>
            <th>동메달</th>
            <th>메달 총 개수</th>
            <th>액션</th>
          </tr>
        </thead>

        <tbody>
          {data.map((element, idx) => {
            return (
              <tr
                key={idx}
                className={element.nation}
                style={{
                  backgroundColor: idx % 2 === 0 ? "#dfe0df" : "#9baebc",
                  color: "black",
                  height: "50px",
                }}
              >
                <th>{element.nation}</th>
                <th>{element.gold}</th>
                <th>{element.silver}</th>
                <th>{element.bronze}</th>
                <th>{element.gold + element.silver + element.bronze}</th>
                <th>
                  <Button
                    type="button"
                    classKeyword="delete-btn"
                    text="삭제"
                    onClick={() => handleDeleteButton(element.nation)}
                  />
                </th>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default MedalTable;
