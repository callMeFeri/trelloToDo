import React from "react";
import { useGlobalContext } from "./context";
export const Navbar = () => {
  const { clean, exit, state } = useGlobalContext();
  return (
    <nav>
      <h1 className="head">Hi {state.username}</h1>
      <h6>You are number:{state.id}</h6>
      <button onClick={clean} className="btn">
        clean
      </button>
      <button onClick={exit} className="btn">
        exit
      </button>
      <hr />
    </nav>
  );
};
