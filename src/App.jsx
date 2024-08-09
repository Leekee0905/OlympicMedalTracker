import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import InputBox from "./components/InputBox";
import MedalTable from "./components/MedalTable";
import NoData from "./components/NoData";

function App() {
  const [pushData, setPushData] = useState(
    JSON.parse(localStorage.getItem("nations")) || []
  );
  return (
    <div id="medal-box">
      <Header />
      <InputBox setPushData={setPushData} pushData={pushData} />
      {pushData.length > 0 ? (
        <MedalTable data={pushData} setPushData={setPushData} />
      ) : (
        <NoData />
      )}
    </div>
  );
}

export default App;
