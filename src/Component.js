import { useGlobalContext } from "./context";
import "./index.css";
export const Component = ({ title }) => {
  const { edit, addTask, remove, state, editDone, changePlace, removeColoumn } =
    useGlobalContext();

  return (
    <div>
      <h4>{title}</h4>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addTask({ text: e.target.inputref.value, model: title });
        }}
      >
        <input type="text" name="inputref" />
        <button type="submit" className="addbtn">
          Add Task
        </button>
        <button onClick={() => removeColoumn(title)} className="removebtn">
          Remove
        </button>
      </form>

      {state.text.map((task) => {
        const { type, content, id, isEditing } = task;
        if (type === title) {
          return (
            <div key={id}>
              {isEditing ? (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    editDone({ content: e.target.input.value, id: id });
                  }}
                >
                  <input type="text" placeholder={content} name="input" />
                  <button type="submit" className="addbtn">
                    done
                  </button>
                </form>
              ) : (
                <>
                  <p>{content}</p>
                  <select
                    value={type}
                    onChange={(e) =>
                      changePlace({ id: id, type: e.target.value })
                    }
                  >
                    {state.coloumns.map((item) => {
                      return <option>{item.text}</option>;
                    })}
                  </select>
                </>
              )}

              {!isEditing && (
                <button onClick={() => edit(id)} className="addbtn">
                  edit
                </button>
              )}
              <button onClick={() => remove(id)} className="removebtn">
                remove
              </button>
            </div>
          );
        }
        console.log("component error");

        <hr />;
      })}
    </div>
  );
};
