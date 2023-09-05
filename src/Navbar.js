import React from "react";
import { useGlobalContext } from "./context";
export const Navbar = () => {
  const { clean, addCol } = useGlobalContext();
  return (
    <nav>
      <h1 className="head">todo</h1>
      <button onClick={clean} className="btn">
        clean
      </button>

      <hr />
    </nav>
  );
};
