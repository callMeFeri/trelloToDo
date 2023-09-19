import { Link, useParams } from "react-router-dom";
import { ComponentContainer } from "./ComponentContainer";
import { useGlobalContext } from "./context";
import "./index.css";
export const Board = () => {
  const { state, addCol, showBoarder } = useGlobalContext();

  return (
    <div>
      <ol>
        {state.boards.map((board) => {
          return (
            <div>
              <hr />
              <li>
                <h3>Boarder:{board}</h3>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    addCol({ text: e.target.input.value, type: board });
                  }}
                >
                  <label>Add Coloumn:</label>
                  <input name="input" type="text" />
                  <button type="submit" className="button">
                    Add Coloumn
                  </button>
                </form>
              </li>

              <ComponentContainer name={board} />
            </div>
          );
        })}
      </ol>
    </div>
  );
};
