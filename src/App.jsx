import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import InputBox from "./components/InputBox";
import MedalTable from "./components/MedalTable";
import NoData from "./components/NoData";
import useMedalInfo from "./hooks/useMedalInfo";

function App() {
  const [localData, setLocalData] = useState(JSON.parse(localStorage.getItem("nations")) || []);
  const { handleOnSubmit, handleUpdateButton, handleDeleteButton } = useMedalInfo(localData, setLocalData);
  return (
    <div id="medal-box">
      <Header />
      <InputBox handleSubmit={handleOnSubmit} handleUpdate={handleUpdateButton} />
      {localData.length > 0 ? <MedalTable handleDelete={handleDeleteButton} data={localData} /> : <NoData />}
    </div>
  );
}

export default App;
