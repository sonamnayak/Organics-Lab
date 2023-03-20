import React from "react";

function Header() {

  return (
    <header>
      <nav className="navbar">
        Organics Lab
      </nav>
      <div className="main-header">
        <h1>This is Heading Text</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mauris,
          turpis interdum massa condimentum mauris amet volutpat.
        </p>
        <button>Let's Go Healthy</button>
      </div>
      <img src="./images/dose-juice-sTPy-oeA3h0-unsplash.png" alt="headerImg" />
    </header>
  );
}

export default Header;
