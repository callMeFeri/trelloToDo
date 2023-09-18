<<<<<<< HEAD
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
=======
import { ComponentContainer } from "./ComponentContainer";
import { useGlobalContext } from "./context";
export const Board = () => {
  const { state, addCol } = useGlobalContext();
  return (
    <div>
      <ol>
        {state.boards.map((board, index) => {
          // const { content, id } = item;
          return (
            <div>
              <hr />

              <li key={index}>
>>>>>>> 7adf42ff4fffb3bdc6f27cada53d484020c15aaa
                <h3>Boarder:{board}</h3>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    addCol({ text: e.target.input.value, type: board });
                  }}
                >
                  <label>Add Coloumn:</label>
                  <input name="input" type="text" />
<<<<<<< HEAD
                  <button type="submit" className="button">
                    Add Coloumn
                  </button>
=======
                  <button type="submit">Add Coloumn</button>
>>>>>>> 7adf42ff4fffb3bdc6f27cada53d484020c15aaa
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
