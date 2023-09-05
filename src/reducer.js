export const reducer = (state, action) => {
  if (action.type === "DELETE-COLOUMN") {
    return {
      ...state,
      coloumns: state.coloumns.filter((item) => item !== action.category),
    };
  }
  if (action.type === "ADD_TASK") {
    let newItem = {
      type: action.func,
      id: new Date().getTime().toString(),
      content: action.text,
    };
    return {
      ...state,
      text: [...state.text, newItem],
    };
  }

  if (action.type === "REMOVE") {
    return {
      ...state,
      text: state.text.filter((item) => item.id !== action.id),
    };
  }

  if (action.type === "EDIT") {
    const selectedItem = state.text.find((item) => item.id === action.id);
    selectedItem.isEditing = true;
    return { ...state };
  }
  if (action.type === "EDIT-DONE") {
    state.text.map((item) => {
      if (item.id === action.id) {
        item.content = action.content;
        item.isEditing = false;
      }
    });
    return { ...state };
  }
  if (action.type === "CLEAN") {
    return { text: [], coloumns: [], boards: [] };
  }
  if (action.type === "CHANGE-PLACE") {
    state.text.map((item) => {
      if (item.id === action.id) {
        item.type = action.newType;
      }
    });
    return { ...state };
  }

  if (action.type === "ADD-COL") {
    const findItem = state.coloumns.find((item) => item === action.col);
    const newColoumn = { text: action.text, type: action.type };
    console.log(newColoumn);
    if (!findItem) {
      return { ...state, coloumns: [...state.coloumns, newColoumn] };
    }
    return { ...state };
  }
  if (action.type === "ADD-BOARD") {
    // let newBoard = {
    //   content: action.text,
    //   id: new Date().getTime().toString(),
    // };
    // console.log(state.boards);
    return { ...state, boards: [...state.boards, action.text] };
  }
};
