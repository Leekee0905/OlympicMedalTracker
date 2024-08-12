const Input = ({ title, name, data, setData, placeholder, type }) => {
  const dataConverter = (data) => {
    return type === "number" ? Number(data) : data;
  };
  return (
    <div className="medal-input">
      <label>
        <span className="medal-title">{title}</span>
      </label>
      <input
        className="input-data"
        type={type}
        placeholder={placeholder}
        name={name}
        value={data[name]}
        onChange={(e) =>
          setData({ ...data, [name]: dataConverter(e.target.value) })
        }
      />
    </div>
  );
};

export default Input;
