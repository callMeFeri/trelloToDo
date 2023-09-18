import { Navbar } from "./Navbar";
import { ComponentContainer } from "./ComponentContainer";
import { Board } from "./Board";
<<<<<<< HEAD
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
=======
import { Route, Routes, Link } from "react-router-dom";
import { useGlobalContext } from "./context";
function App() {
  const { addBoard, state } = useGlobalContext();
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
        <button type="submit">Add Board</button>
        <Link to="/boards">Boards Page</Link>
      </form>

      <h5>Your Boards:</h5>
      <ol>
        {state.boards.map((board, index) => {
          // const { id, content } = board;
          return (
            <>
              <li key={index}>
                <p>{board}</p>
              </li>
            </>
          );
        })}
      </ol>
      <Routes>
        <Route path="/boards" element={<Board />} />
        <Route path="/lists" element={<ComponentContainer />} />
      </Routes>
    </main>
  );
>>>>>>> 7adf42ff4fffb3bdc6f27cada53d484020c15aaa
}

export default App;
