import { Navbar } from "./Navbar";
import { ComponentContainer } from "./ComponentContainer";
import { Board } from "./Board";
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
}

export default App;
