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
  return (
    <div id="medal-box">
      <Header />
      <InputBox localData={localData} setLocalData={setLocalData} />
      {localData.length > 0 ? (
        <MedalTable localData={localData} setLocalData={setLocalData} />
      ) : (
        <NoData />
      )}
    </div>
  );
}

export default App;
