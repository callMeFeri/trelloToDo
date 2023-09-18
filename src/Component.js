import { useGlobalContext } from "./context";
<<<<<<< HEAD
import "./index.css";
export const Component = ({ title }) => {
=======
export const Component = ({ boarderName, title }) => {
>>>>>>> 7adf42ff4fffb3bdc6f27cada53d484020c15aaa
  const { edit, addTask, remove, state, editDone, changePlace, removeColoumn } =
    useGlobalContext();

  return (
    <div>
<<<<<<< HEAD
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
=======
      <h3>{title}</h3>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addTask({ text: e.target.inputref.value, type: title });
        }}
      >
        <input type="text" name="inputref" />
        <button type="submit">Add</button>
        <button onClick={() => removeColoumn(title)}> Remove</button>
>>>>>>> 7adf42ff4fffb3bdc6f27cada53d484020c15aaa
      </form>

      {state.text.map((task) => {
        const { type, content, id, isEditing } = task;
        if (type === title) {
<<<<<<< HEAD
=======
          console.log(title);
>>>>>>> 7adf42ff4fffb3bdc6f27cada53d484020c15aaa
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
<<<<<<< HEAD
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

=======
                  <button type="submit">done</button>
                </form>
              ) : (
                <p>{content}</p>
              )}

              {!isEditing && <button onClick={() => edit(id)}>edit</button>}
              <button onClick={() => remove(id)}>remove</button>

              <select
                value={type}
                onChange={(e) => changePlace({ id: id, type: e.target.value })}
              >
                {state.coloumns.map((item) => {
                  return <option>{item}</option>;
                })}
              </select>
            </div>
          );
        } else {
          console.log("component error");
        }
>>>>>>> 7adf42ff4fffb3bdc6f27cada53d484020c15aaa
        <hr />;
      })}
    </div>
  );
};
