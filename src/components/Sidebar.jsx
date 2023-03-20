import React from "react";
import ProgressBar from "./ProgressBar";
import Score from "./Score";

function Sidebar(props) {
  return (
    <aside className={props.className} id={props.id}>
      <div className="sidebar-ellipse">
        <div className="ellipse-img">
          <img src="./images/Ellipse 7.png" alt="ellipseBg" />
          <img src="./images/Ellipse 8.png" alt="ellipseColor" />
        </div>
        <div className="sidebar-score">
            <span>68</span>/100
        </div>
      </div>
      <div className="sidebar-content">
        <h2>This is Primary Result 8</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mauris,
          turpis interdum massa condimentum.
        </p>
        <button>Let's Go Healthy</button>
      </div>
      <div className="sidebar-progress">
        <div className="sidebar-result">
          <p>This is Result 1</p>
          <Score color="#FFB52D" num="30" pcolor="rgba(51, 95, 4, 0.4)" />
        </div>
        <ProgressBar width="30%" color="#FFB52D" mainWidth="380px" />
        <div className="sidebar-result">
          <p>This is Result 5</p>
          <Score color="#004699" num="54" pcolor="rgba(51, 95, 4, 0.4)" />
        </div>
        <ProgressBar width="54%" color="#004699" mainWidth="380px" />
        <div className="sidebar-result">
          <p>This is Result 6</p>
          <Score color="#7C3F2C" num="26" pcolor="rgba(51, 95, 4, 0.4)" />
        </div>
        <ProgressBar width="26%" color="#7C3F2C" mainWidth="380px" />
      </div>
    </aside>
  );
}

export default Sidebar;
