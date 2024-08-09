import "../styles/MedalTable.css";
const MedalTable = ({ handleDeleteButton, localData }) => {
  return (
    <div id="table-box">
      <table id="medal-table">
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
          {localData.map((element, idx) => {
            return (
              <tr
                key={idx}
                style={{
                  backgroundColor: idx % 2 === 0 ? "#dfe0df" : "#9baebc",
                  color: "black",
                  height: "50px",
                }}
              >
                <th>{element.nation}</th>
                <th>{element.gold}</th>
                <th>{element.silver}</th>
                <th>{element.cooper}</th>
                <th>{element.gold + element.silver + element.cooper}</th>
                <th>
                  <button
                    className="delete-btn"
                    type="button"
                    onClick={() => handleDeleteButton(idx)}
                  >
                    삭제
                  </button>
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
