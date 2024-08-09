import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import InputBox from "./components/InputBox";
import MedalTable from "./components/MedalTable";
import NoData from "./components/NoData";

function App() {
  const [localData, setLocalData] = useState(
    JSON.parse(localStorage.getItem("nations")) || []
  );

  const sortData = (array) => {
    return array.sort((a, b) => {
      if (a.gold === b.gold) {
        return b.gold + b.silver + b.cooper - (a.gold + a.silver + a.cooper);
      } else {
        return b.gold - a.gold;
      }
    });
  };

  const handleOnSubmit = (event, data, setData) => {
    event.preventDefault();
    const updateIndex = localData.findIndex(
      (element) => element.nation === data.nation
    );
    if (data.nation === "") {
      alert("국가를 입력해주세요");
    } else if (updateIndex >= 0) {
      alert("이미 등록된 국가입니다.");
    } else {
      const updateData = sortData([...localData, data]);
      localStorage.setItem("nations", JSON.stringify(updateData));
      setData({
        nation: "",
        gold: 0,
        silver: 0,
        cooper: 0,
      });
    }
  };

  const handleUpdateButton = (data, setData) => {
    const localStorageItem = JSON.parse(localStorage.getItem("nations")) || [];
    const updateIndex = localStorageItem.findIndex(
      (element) => element.nation === data.nation
    );
    if (updateIndex >= 0) {
      const updateData = sortData(
        localData.map((element, index) =>
          index === updateIndex ? data : element
        )
      );
      setLocalData(updateData);
      localStorage.setItem("nations", JSON.stringify(updateData));
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

  const handleDeleteButton = (idx) => {
    setLocalData(localData.filter((e, index) => index !== idx));
    localStorage.setItem(
      "nations",
      localData.filter((e, index) => index !== idx)
    );
  };

  return (
    <div id="medal-box">
      <Header />
      <InputBox
        handleOnSubmit={handleOnSubmit}
        handleUpdateButton={handleUpdateButton}
      />
      {localData.length > 0 ? (
        <MedalTable handleDeleteButton={handleDeleteButton} data={localData} />
      ) : (
        <NoData />
      )}
    </div>
  );
}

export default App;
