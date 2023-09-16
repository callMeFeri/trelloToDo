import React, { useContext, useEffect, useReducer } from "react";
import { reducer } from "./reducer";
const loader = (section) => {
  const loadingInfo = JSON.parse(localStorage.getItem("tasks"));
  if (!loadingInfo) {
    return (
      (loadingInfo.boards = []),
      (loadingInfo.coloumns = [{ text: "", id: 0 }]),
      (loadingInfo.text = [
        { type: "", content: "", id: 0, isEditing: false, belongTo: "" },
      ])((loadingInfo.logedIn = false))((loadingInfo.id = 0))(
        (loadingInfo.pass = "")
      )((loadingInfo.username = ""))((loadingInfo.showBoarder = true))
    );
  }
  if (section === "coloumns") {
    return loadingInfo.coloumns;
  }
  if (section === "text") {
    return loadingInfo.text;
  }
  if (section === "boards") {
    return loadingInfo.boards;
  }
  if (section === "log") {
    return loadingInfo.logedIn;
  }
  if (section === "username") {
    return loadingInfo.username;
  }
  if (section === "id") {
    return loadingInfo.id;
  }
  if (section === "pass") {
    return loadingInfo.pass;
  }
  if (section === "show-boarder") {
    return loadingInfo.showBoarder;
  }
};

export const AppContext = React.createContext();
const initialState = {
  //the initial values
  boards: loader("boards"),
  text: loader("text"),
  coloumns: loader("coloumns"),
  logedIn: loader("log"),
  signingUp: false,
  id: loader("id"),
  username: loader("username"),
  pass: loader("pass"),
  showBoarder: true, // loader("show-border"),
};
export const AppProvider = ({ children }) => {
  //the functions and common values

  const [state, dispatch] = useReducer(reducer, initialState);

  const addTask = ({ text, model }) => {
    dispatch({ type: "ADD_TASK", text: text, func: model });
  };
  const remove = (id) => {
    dispatch({ type: "REMOVE", id: id });
  };
  const edit = (id) => {
    dispatch({ type: "EDIT", id: id });
  };
  const editDone = ({ id, content }) => {
    dispatch({ type: "EDIT-DONE", id: id, content: content });
  };
  const clean = () => {
    dispatch({ type: "CLEAN" });
  };
  const changePlace = ({ id, type }) => {
    dispatch({ type: "CHANGE-PLACE", id: id, newType: type });
  };
  const removeColoumn = (title) => {
    dispatch({ type: "DELETE-COLOUMN", category: title });
  };
  const addCol = ({ text, type }) => {
    dispatch({ type: "ADD-COL", text: text, model: type });
  };
  const addBoard = (text) => {
    dispatch({ type: "ADD-BOARD", text: text });
  };
  const logInFunc = (uname) => {
    dispatch({ type: "ENTER", uname: uname });
  };
  const exit = () => {
    dispatch({ type: "EXIT" });
  };
  const signingUp = () => {
    dispatch({ type: "SIGN-UP" });
  };
  const logIn = ({ uname, pass, id }) => {
    dispatch({ type: "LOG-IN", uname: uname });
  };
  const showBoarder = () => {
    dispatch({ type: "SHOW-BOARDER" });
  };
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(state));
    const memberData = {
      data: {
        // username: state.username,
        // pass: state.pass,
        border: state.boards,
        coloumns: JSON.stringify(state.coloumns),
        text: JSON.stringify(state.text),
      },
    };
    console.log(JSON.stringify(memberData));
    fetch(`http://localhost:1337/api/usersapis/${state.id}`, {
      method: "POST",
      // mode: "cors",
      body: JSON.stringify(memberData),
    });
  }, [state]);

  return (
    <AppContext.Provider
      value={{
        addTask,
        remove,
        edit,
        editDone,
        state,
        clean,
        changePlace,
        removeColoumn,
        addCol,
        addBoard,
        logInFunc,
        exit,
        signingUp,
        logIn,
        showBoarder,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
