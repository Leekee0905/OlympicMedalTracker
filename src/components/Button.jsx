const Button = ({ func, type, classKeyword, text }) => {
  const deleteStyle = {
    width: "50px",
    height: "30px",
    margin: "0 10px",
    borderRadius: "10px",
    fontSize: "14px",
    fontWeight: "bold",
    backgroundColor: "#ff0000",
    color: "white",
    border: "0",
    cursor: "pointer",
  };

  const defaultStyle = {
    width: "80px",
    height: "40px",
    margin: "0 10px",
    borderRadius: "10px",
    fontSize: "14px",
    fontWeight: "bold",
    backgroundColor: "#ffa500",
    color: "white",
    border: "0",
    cursor: "pointer",
  };
  return (
    <button
      className={classKeyword}
      type={type}
      onClick={func}
      style={text === "삭제" ? deleteStyle : defaultStyle}
    >
      {text}
    </button>
  );
};

export default Button;
