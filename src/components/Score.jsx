import React from "react";

function Score(props) {
  return (
    <div style={{ color: props.pcolor }}>
      <span style={{ color: props.color }}>{props.num}</span>/100
    </div>
  );
}

export default Score;
