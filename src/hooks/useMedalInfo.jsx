import { useState } from "react";

const useMedalInfo = (key) => {
  const [localData, setLocalData] = useState(
    JSON.parse(localStorage.getItem(key)) || []
  );

  const sortData = (array) => {
    return array.sort((a, b) => {
      if (a.gold === b.gold) {
        return b.gold + b.silver + b.bronze - (a.gold + a.silver + a.bronze);
      }
      return b.gold - a.gold;
    });
  };

  const syncStateLocalData = (data) => {
    localStorage.setItem(key, JSON.stringify(data));
    setLocalData(data);
  };

  const handleOnSubmit = (data, setData) => {
    const updateIndex = localData.findIndex(
      (element) => element.nation === data.nation
    );
    if (data.nation === "") {
      alert("국가를 입력해주세요");
    } else if (updateIndex >= 0) {
      alert("이미 등록된 국가입니다.");
    } else {
      const updateData = sortData([...localData, data]);
      syncStateLocalData(updateData);
      setData({
        nation: "",
        gold: 0,
        silver: 0,
        bronze: 0,
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
      syncStateLocalData(updateData);
      setData({
        nation: "",
        gold: 0,
        silver: 0,
        bronze: 0,
      });
    } else {
      alert("등록되지 않은 국가입니다.");
    }
  };

  const handleDeleteButton = (nation) => {
    const filteredData = localData.filter((e) => e.nation !== nation);
    syncStateLocalData(filteredData);
  };

  return {
    localData,
    handleOnSubmit,
    handleUpdateButton,
    handleDeleteButton,
  };
};

export default useMedalInfo;
