interface Props {
  buttonClicked: () => void;
  children: string;
  colour: "primary" | "secondary" | "success" | "warning" | "danger";
  disable?: boolean;
  gridshit?: string;
  outline: string;
  size?: "sm" | "lg";
}

const ButtonComponent = ({
  buttonClicked,
  children,
  colour = "primary",
  disable,
  gridshit,
  outline,
  size,
}: Props) => {
  return (
    <div>
      <button
        className={
          "btn btn-" +
          colour +
          " btn-outline-" +
          outline +
          " btn-" +
          size +
          " btn-" +
          gridshit
        }
        disabled={disable ? true : false}
        onClick={buttonClicked}
      >
        {children} Button
      </button>
    </div>
  );
};

export default ButtonComponent;
