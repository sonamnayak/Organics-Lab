import React from "react";

function Card(props) {
  return (
    <div className={props.className}>
      <h3>This is Result {props.count}</h3>
      <div className="card-img">
        {props.score && (
          <>
            <img src="./images/Ellipse 1.png" alt="ellipseBg" />
            {
              props.mug && (
                <div className="mug">
                  <img src="./images/Vectormug.png" alt="mug" />
                </div>
              )
            }
            <img src={props.ellipse} style={{ position: "absolute" }} alt="ellipseColor" />
          </>
        )}
        {props.img && (
          <img src={props.img} alt="cardBoard" />
        )}
      </div>
      {props.score && (
        <p>
          <span style={{ color: props.color }}>{props.num}</span>/50
        </p>
      )}
      <p>{props.desc}</p>
    </div>
  );
}

export default Card;
