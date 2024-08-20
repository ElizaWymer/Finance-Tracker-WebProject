import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  onClose: () => void;
}

const Alert = ({ children, onClose }: Props) => {
  return (
    <div className="alert alert-danger alert-dismissible ">
      <button
        type="button"
        className="btn-close"
        data-dismiss="alert"
        aria-label="Close"
        onClick={onClose}
      ></button>
      {children}
    </div>
  );
};

export default Alert;
