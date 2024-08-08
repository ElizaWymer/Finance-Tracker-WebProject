import { ReactNode } from "react";

interface Props {
  buttonClicked: () => void;
  children: string;
  colour?: "primary" | "secondary" | "success" | "danger";
  outline: string;
  size: string;
}

const ButtonComponent = ({
  buttonClicked,
  children,
  colour = "primary",
  outline,
  size,
}: Props) => {
  return (
    <div>
      <button
        type="button"
        className={
          "btn btn-" + colour + " btn-outline-" + outline + " btn-" + size
        }
        onClick={buttonClicked}
      >
        'lil {children}
      </button>
      <button className="btn btn-warning btn-outline-dark">
        reg {children}
      </button>
      <button className="btn btn-danger btn-outline-dark btn-lg">
        larg {children}
      </button>
      <button className="btn btn-primary d-grid gap-2 col-6 mx-auto">
        Enabled {children}
      </button>
      <button className="btn btn-primary d-grid gap-2 col-6 mx-auto" disabled>
        Disabled {children}
      </button>
    </div>
  );
};

export default ButtonComponent;
