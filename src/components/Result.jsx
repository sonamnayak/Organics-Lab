import React from "react";
import ProgressBar from "./ProgressBar";
import Score from "./Score";

function Result(props) {
  return (
    <div className={props.className}>
      <img src={props.img} alt="resultImg" />
      <Score color={props.color} num={props.num} />
      <ProgressBar width={props.width} color={props.color} />
      <h2>This is Result {props.count}</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mauris,
        turpis interdum massa condimentum mauris amet volutpat.
      </p>
    </div>
  );
}

export default Result;
