import "./App.css";
import Header from "./components/Header";
import InputBox from "./components/InputBox";
import MedalTable from "./components/MedalTable";
import NoData from "./components/NoData";
import useMedalInfo from "./hooks/useMedalInfo";

function App() {
  const { localData, handleDeleteButton, handleOnSubmit, handleUpdateButton } =
    useMedalInfo("nations");

  return (
    <div className="medal-box">
      <Header />
      <InputBox
        handleOnSubmit={handleOnSubmit}
        handleUpdateButton={handleUpdateButton}
      />
      {localData.length > 0 ? (
        <MedalTable data={localData} handleDeleteButton={handleDeleteButton} />
      ) : (
        <NoData />
      )}
    </div>
  );
}

export default App;
