import React from "react";

function Footer() {
  return (
    <footer>
      <h1>How can we get in touch?</h1>
      <form>
        <div className="inputs">
          <div className="input-div">
            <img src="./images/Vector.png" alt="userIcon" />
            <input type="text" placeholder="Name" />
          </div>
          <div className="input-div">
            <img src="./images/Vector2.png" alt="emailIcon" />
            <input type="email" placeholder="Email" /> <br />
          </div>
        </div>
        <button>Submit</button>
      </form>
      <h2>Thank You!</h2>
      <p>Let's Get In Touch</p>
      <div className="icons-container">
        <div className="circular-icons">
          <div className="icon">
            <i className="fa-brands fa-facebook-f"></i>
          </div>
          <div className="icon">
            <i className="fa-brands fa-twitter"></i>
          </div>
          <div className="icon">
            <i className="fa-brands fa-linkedin-in"></i>
          </div>
          <div className="icon">
            <i className="fa-solid fa-phone"></i>
          </div>
          <div className="icon">
            <i className="fa-regular fa-envelope"></i>
          </div>
          <div className="icon">
            <i className="fa-regular fa-comment-dots"></i>
          </div>
        </div>
        <div className="button-icons">
          <button style={{ backgroundColor: "#4267b2" }}>
            <i className="fa-solid fa-thumbs-up"></i>
            Like
          </button>
          <button style={{ backgroundColor: "#3db8e4" }}>
            <i className="fa-brands fa-twitter"></i>
            Follow
          </button>
          <button style={{ backgroundColor: "#000000" }}>
            <i className="fa-brands fa-instagram"></i>
            Follow
          </button>
          <button style={{ backgroundColor: "#e6001a" }}>
            <i className="fa-brands fa-pinterest"></i>
            Follow
          </button>
          <button style={{ backgroundColor: "#006097" }}>
            <i className="fa-brands fa-linkedin-in"></i>
            Follow
          </button>
        </div>
      </div>
      <button>Retake</button>
      <div className="copyright">
        <div>This calculator is powered by Outgrow.co</div>
        <img src="./images/image 13.png" alt="outgrow" />
      </div>
    </footer>
  );
}

export default Footer;
