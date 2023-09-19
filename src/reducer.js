export const reducer = (state, action) => {
  if (action.type === "DELETE-COLOUMN") {
    console.log(action.category);
    return {
      ...state,
      coloumns: state.coloumns.filter((item) => item.text !== action.category),
    };
  }
  if (action.type === "ADD_TASK") {
    let newItem = {
      type: action.func,
      id: new Date().getTime().toString(),
      content: action.text,
      isEditing: false,
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
    return { ...state, text: [], coloumns: [], boards: [], logedIn: true };
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
    const newColoumn = { text: action.text, type: action.model };
    if (!findItem) {
      return { ...state, coloumns: [...state.coloumns, newColoumn] };
    }
    return { ...state };
  }
  if (action.type === "ADD-BOARD") {
    let newBoard = action.text;
    return { ...state, boards: [...state.boards, newBoard] };
  }
  if (action.type === "ENTER") {
    return {
      ...state,
      logedIn: true,
      username: action.uname.uname,
      id: action.uname.id,
      pass: action.uname.pass,
    };
  }
  if (action.type === "EXIT") {
    return { ...state, logedIn: false };
  }
  if (action.type === "SIGN-UP") {
    return { ...state, signingUp: !state.signingUp };
  }
  if (action.type === "SHOW-BOARDER") {
    return { ...state, showBoarder: !state.showBoarder };
  }
};
