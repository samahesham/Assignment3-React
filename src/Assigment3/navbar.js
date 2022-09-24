import React, { useState } from "react";
import "./navbar.css";
import NavLink from "./link";
import "./navbar.css";

function Navbar() {
    let [navelements, setnavelements] = useState([
        { data: "/products", content: "Products" },
        { data: "/favs", content: "Favorities" },
      ]);
      return (
        <>
            <body>
              <div class="container-fluid">
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              {navelements.map((item) => (
                <NavLink data={item.data} content={item.content} />
              ))}
            </ul>
          </div>
        </nav>
        </div>
        </body>
    </>
  );
}

export default Navbar;