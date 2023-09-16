import { useGlobalContext } from "./context";

export const SignUp = () => {
  const { signingUp } = useGlobalContext();
  const handleSignUp = ({ uname, pass }) => {
    const memberData = {
      data: {
        username: uname,
        pass: pass,
      },
    };
    fetch("http://localhost:1337/api/usersapis", {
      method: "POST",
      mode: "cors",
      body: JSON.stringify(memberData),
    });
  };
  return (
    <>
      <div className="form-sign">
        <form
          onSubmit={(e) =>
            handleSignUp({
              uname: e.target.uname.value,
              pass: e.target.psw.value,
            })
          }
        >
          <h1>Sign Up</h1>
          <p>Please fill in this form to create an account.</p>

          <label htmlFor="uname">
            <b>Username</b>
          </label>
          <input
            type="text"
            placeholder="Enter Your Name"
            name="uname"
            required
          />
          <br />
          <label htmlFor="psw">
            <b>Password</b>
          </label>
          <input
            type="password"
            placeholder="Enter Password"
            name="psw"
            required
          />
          <br />
          <label htmlFor="psw-repeat">
            <b>Password</b>
          </label>
          <input
            type="password"
            placeholder="Repeat Password"
            name="psw-repeat"
            required
          />
          <br />
          <button type="submit" className="button">
            Sign Up
          </button>
          <br />
          <button type="button" className="cancelbtn" onClick={signingUp}>
            Cancel
          </button>
        </form>
      </div>
    </>
  );
};
