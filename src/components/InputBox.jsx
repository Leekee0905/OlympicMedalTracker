import { useState } from "react";
import "../styles/InputBox.css";
import Button from "./Button";
import Input from "./Input";

const InputBox = ({ handleOnSubmit, handleUpdateButton }) => {
  const inputType = {
    nation: "국가명",
    gold: "금메달",
    silver: "은메달",
    bronze: "동메달",
  };
  const [data, setData] = useState({
    nation: "",
    gold: 0,
    silver: 0,
    bronze: 0,
  });
  return (
    <div className="input-box">
      <form
        className="input-form"
        onSubmit={(e) => {
          e.preventDefault();
          handleOnSubmit(data, setData);
        }}
      >
        {Object.entries(inputType).map(([key, value]) =>
          key === "nation" ? (
            <Input
              key={key}
              title="국가명"
              name="nation"
              data={data}
              setData={setData}
              placeholder="국가 입력"
              type="text"
            />
          ) : (
            <Input
              key={key}
              title={value}
              name={key}
              data={data}
              setData={setData}
              type="number"
            />
          )
        )}
        <div className="button-box">
          <Button type="submit" classKeyword="update-button" text="국가추가" />
          <Button
            type="button"
            classKeyword="update-button"
            text="업데이트"
            func={() => handleUpdateButton(data, setData)}
          />
        </div>
      </form>
    </div>
  );
};

export default InputBox;
