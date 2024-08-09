import "../styles/MedalTable.css";
const MedalTable = ({ data, setPushData }) => {
  const localStorageItem = JSON.parse(localStorage.getItem("nations"));

  const handleDeleteButton = (idx) => {
    setPushData(data.filter((e, index) => index !== idx));
    localStorage.setItem(
      "nations",
      JSON.stringify(localStorageItem.filter((e, index) => index !== idx))
    );
  };
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
          {data.map((element, idx) => {
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
