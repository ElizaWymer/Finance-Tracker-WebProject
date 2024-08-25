import { useState } from "react";
import { FaHeart } from "react-icons/fa";
import LikeStyle from "./LikeComponent.module.css";

const LikeComponent = () => {
  const [currentState, setState] = useState("unclicked");
  return (
    <div>
      <FaHeart
        size={30}
        className={[
          LikeStyle.defaultLikeComponent,
          LikeStyle[currentState + "LikeComponent"],
        ].join(" ")}
        onClick={() => {
          currentState === "unclicked" && setState("clicked");
          currentState === "clicked" && setState("unclicked");
          console.log("Clicked!");
        }}
      />
    </div>
  );
};

export default LikeComponent;
