import { Navbar } from "./Navbar";
import { ComponentContainer } from "./ComponentContainer";
import { Board } from "./Board";
import { Route, Routes, Link, useParams } from "react-router-dom";
import { useGlobalContext } from "./context";
import { LogIn } from "./Log";
import "./index.css";
import { SignUp } from "./SignUp";

function App() {
  const { addBoard, state, showBoarder } = useGlobalContext();

  const { id } = useParams();
  console.log(id);
  if (state.logedIn) {
    return (
      <main>
        <Navbar />
        <form
          onSubmit={(e) => {
            e.preventDefault();
            addBoard(e.target.input.value);
          }}
        >
          <label>Add a board:</label>
          <input type="text" name="input" />
          <button type="submit" className="addbtn">
            Add Board
          </button>
          {!state.showBoarder ? (
            <Link to="/" onClick={showBoarder} className="boardpg">
              Hide Boarders
            </Link>
          ) : (
            <Link to="/boards" onClick={showBoarder} className="boardpg">
              show Boarders
            </Link>
          )}
        </form>
        {state.showBoarder && (
          <>
            <h5>Your Boards:</h5>

            <ol className="board-list">
              {state.boards.map((board) => {
                return (
                  <>
                    <li>
                      <p>{board}</p>
                    </li>
                  </>
                );
              })}
            </ol>
          </>
        )}

        <br />
        <Routes>
          <Route path="/boards" element={<Board />} />
          <Route path="/lists" element={<ComponentContainer />} />
          <Route path="/" />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </main>
    );
  }
  if (state.signingUp) {
    return <SignUp />;
  }
  return <LogIn />;
}

export default App;
