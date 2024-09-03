interface Props {
  children?: string;
  label?: string;
  isDropDown?: boolean;
}

const InputBoxes = ({ children, label, isDropDown }: Props) => {
  return (
    <div>
      <p>{label}</p>
      <input
        type="text"
        className="form-control"
        placeholder={children}
        aria-describedby="basic-addon1"
      ></input>
      {isDropDown ? <button className="dropdown-toggle"> V </button> : <></>}
    </div>
  );
};

export default InputBoxes;
