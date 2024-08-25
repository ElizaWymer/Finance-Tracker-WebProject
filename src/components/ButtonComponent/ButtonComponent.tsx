import ButtonStyle from "./ButtonComponent.module.css";

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
        className={[
          ButtonStyle.buttonComponent,
          ButtonStyle["button" + colour],
        ].join(" ")}
        disabled={disable ? true : false}
        onClick={buttonClicked}
      >
        {children}
      </button>
    </div>
  );
};

export default ButtonComponent;
