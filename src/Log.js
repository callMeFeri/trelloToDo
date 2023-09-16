import "./index.css";
import { useGlobalContext } from "./context";
import { Link } from "react-router-dom";
import { SignUp } from "./SignUp";
export const LogIn = () => {
  const { state, logInFunc, signingUp } = useGlobalContext();
  const fetchDataBase = async ({ uname, password }) => {
    const response = await fetch("http://localhost:1337/api/usersapis");
    const data = await response.json();
    data.data.map((member) => {
      if (
        (member.attributes.username === uname,
        member.attributes.pass === password)
      ) {
        logInFunc({ uname: uname, pass: password, id: member.id });
      }
      console.log("plz enter first");
    });
  };
  return (
    <div className="log">
      <form
        className="form"
        onSubmit={(e) => {
          e.preventDefault();
          fetchDataBase({
            uname: e.target.uname.value,
            password: e.target.psw.value,
          });
        }}
      >
        <h1>Log In</h1>
        <p>please enter your info below: </p>
        <div className="formdiv">
          <label htmlFor="uname">
            <b>Username:</b>
          </label>
          <input type="text" placeholder="Enter Username" name="uname" />
          <br />

          <label htmlFor="psw">
            <b>Password:</b>
          </label>
          <input type="password" placeholder="Enter Password" name="psw" />
          <br />
          <button type="submit" className="button">
            Login
          </button>
          <br />

          <button onClick={signingUp} className="cancelbtn">
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
};
