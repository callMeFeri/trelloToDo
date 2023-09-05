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
                <h3>Boarder:{board}</h3>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    addCol({ text: e.target.input.value, type: board });
                  }}
                >
                  <label>Add Coloumn:</label>
                  <input name="input" type="text" />
                  <button type="submit">Add Coloumn</button>
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
