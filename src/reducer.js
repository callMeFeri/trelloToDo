export const reducer = (state, action) => {
  if (action.type === "DELETE-COLOUMN") {
<<<<<<< HEAD
    console.log(action.category);
    return {
      ...state,
      coloumns: state.coloumns.filter((item) => item.text !== action.category),
=======
    return {
      ...state,
      coloumns: state.coloumns.filter((item) => item !== action.category),
>>>>>>> 7adf42ff4fffb3bdc6f27cada53d484020c15aaa
    };
  }
  if (action.type === "ADD_TASK") {
    let newItem = {
      type: action.func,
      id: new Date().getTime().toString(),
      content: action.text,
<<<<<<< HEAD
      isEditing: false,
=======
>>>>>>> 7adf42ff4fffb3bdc6f27cada53d484020c15aaa
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
<<<<<<< HEAD
    return { ...state, text: [], coloumns: [], boards: [], logedIn: true };
=======
    return { text: [], coloumns: [], boards: [] };
>>>>>>> 7adf42ff4fffb3bdc6f27cada53d484020c15aaa
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
<<<<<<< HEAD
    const newColoumn = { text: action.text, type: action.model };
=======
    const newColoumn = { text: action.text, type: action.type };
    console.log(newColoumn);
>>>>>>> 7adf42ff4fffb3bdc6f27cada53d484020c15aaa
    if (!findItem) {
      return { ...state, coloumns: [...state.coloumns, newColoumn] };
    }
    return { ...state };
  }
  if (action.type === "ADD-BOARD") {
<<<<<<< HEAD
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
=======
    // let newBoard = {
    //   content: action.text,
    //   id: new Date().getTime().toString(),
    // };
    // console.log(state.boards);
    return { ...state, boards: [...state.boards, action.text] };
>>>>>>> 7adf42ff4fffb3bdc6f27cada53d484020c15aaa
  }
};
