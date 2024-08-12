const useMedalInfo = (localData, setLocalData) => {
  const sortData = (array) => {
    return array.sort((a, b) => {
      if (a.gold === b.gold) {
        return b.gold + b.silver + b.cooper - (a.gold + a.silver + a.cooper);
      }
      return b.gold - a.gold;
    });
  };

  const syncStateLocalData = (data) => {
    setLocalData(data);
    localStorage.setItem("nations", JSON.stringify(data));
  };

  // 이벤트 폼태그에서
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
      syncStateLocalData(updateData);
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
      syncStateLocalData(updateData);
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

  // 필터는 인덱스 말고 다른 값으로
  const handleDeleteButton = (idx) => {
    const filteredData = localData.filter((e, index) => index !== idx);
    syncStateLocalData(filteredData);
  };

  return {
    handleOnSubmit,
    handleUpdateButton,
    handleDeleteButton,
  };
};

export default useMedalInfo;
