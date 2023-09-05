import { useGlobalContext } from "./context";
export const Component = ({ boarderName, title }) => {
  const { edit, addTask, remove, state, editDone, changePlace, removeColoumn } =
    useGlobalContext();

  return (
    <div>
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
      </form>

      {state.text.map((task) => {
        const { type, content, id, isEditing } = task;
        if (type === title) {
          console.log(title);
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
        <hr />;
      })}
    </div>
  );
};
