import React from "react";

//style
import "../../style/spineer.css";

export default function Spinner() {
  return (
    <div className="main-loader">
      <div className="loader">
        <span className="loader-span"></span>
        <span className="loader-span"></span>
        <span className="loader-span"></span>
        <span className="loader-span"></span>
        <div className="loading-text"></div>
      </div>
      {/* loading title */}
      <div className='laoder-heading'>
        <span className="letter">L</span>
        <span className="letter">O</span>
        <span className="letter">A</span>
        <span className="letter">D</span>
        <span className="letter">I</span>
        <span className="letter">N</span>
        <span className="letter">G</span>
      </div>
    </div>
  );
}

