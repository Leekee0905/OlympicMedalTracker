import { useState } from "react";
import "../styles/InputBox.css";
import Medal from "./Medal";

const InputBox = ({ pushData, setPushData }) => {
  const medalType = ["금메달", "은메달", "동메달"];
  const [data, setData] = useState({
    nation: "",
    gold: 0,
    silver: 0,
    cooper: 0,
  });

  const handleOnSubmit = (event) => {
    event.preventDefault();
    const localStorageItem = JSON.parse(localStorage.getItem("nations")) || [];
    const updateIndex = localStorageItem.findIndex(
      (e) => e.nation === data.nation
    );

    if (data.nation === "") {
      alert("국가를 입력해주세요");
    } else if (updateIndex >= 0) {
      alert("이미 등록된 국가입니다.");
    } else {
      setPushData([...pushData, data]);
      localStorage.setItem("nations", JSON.stringify([...pushData, data]));
      setData({
        nation: "",
        gold: 0,
        silver: 0,
        cooper: 0,
      });
    }
  };

  const handleUpdateButton = () => {
    const localStorageItem = JSON.parse(localStorage.getItem("nations")) || [];
    const updateIndex = localStorageItem.findIndex(
      (e) => e.nation === data.nation
    );
    if (updateIndex >= 0) {
      setPushData(
        pushData.map((e, index) => (index === updateIndex ? data : e))
      );
      localStorage.setItem(
        "nations",
        JSON.stringify(
          pushData.map((e, index) => (index === updateIndex ? data : e))
        )
      );
      setData({
        nation: "",
        gold: 0,
        silver: 0,
        cooper: 0,
      });
    } else {
      alert("등록되지 않은 국가입니다.");
    }
  };

  return (
    <div className="input-box">
      <form className="input-form" onSubmit={(e) => handleOnSubmit(e)}>
        <div className="medal-input">
          <label>
            <span className="medal-title">국가명</span>
          </label>
          <input
            className="input-data"
            type="text"
            placeholder="국가 입력"
            name="nation"
            value={data.nation}
            onChange={(e) => setData({ ...data, nation: e.target.value })}
          />
        </div>

        {medalType.map((medal, index) => (
          <Medal key={index} medalType={medal} data={data} setData={setData} />
        ))}
        <div className="button-box">
          <button className="update-button" type="submit">
            국가추가
          </button>
          <button
            className="update-button"
            type="button"
            onClick={() => handleUpdateButton()}
          >
            업데이트
          </button>
        </div>
      </form>
    </div>
  );
};

export default InputBox;
