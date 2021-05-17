//Npm Package
import React from "react";

//material UI
import Avatar from "@material-ui/core/Avatar";
import ImageIcon from "@material-ui/icons/Image";

//style
import "../../style/navbar.css";

//main Function
export default function NavBar() {
  return (
    <div>
      <ul className="nav">
        <li className="nav-item slam-left">
          <a href="#">Vaccine Notifier</a>
        </li>
       
      </ul>
    </div>
  );
}
