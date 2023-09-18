import React from "react";
import { useGlobalContext } from "./context";
export const Navbar = () => {
<<<<<<< HEAD
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
=======
  const { clean, addCol } = useGlobalContext();
  return (
    <nav>
      <h1 className="head">todo</h1>
      <button onClick={clean} className="btn">
        clean
      </button>

>>>>>>> 7adf42ff4fffb3bdc6f27cada53d484020c15aaa
      <hr />
    </nav>
  );
};
