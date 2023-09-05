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
      ])
    );
  }
  if (section === "coloumns") {
    return loadingInfo.coloumns;
  }
  if (section === "text") {
    return loadingInfo.text;
  }
  if (section === "boards") {
    console.log("uu");
    return loadingInfo.boards;
  }
};

export const AppContext = React.createContext();
const initialState = {
  //the initial values
  boards: loader("boards"),
  text: loader("text"),
  coloumns: loader("coloumns"),
};
export const AppProvider = ({ children }) => {
  //the functions and common values

  const [state, dispatch] = useReducer(reducer, initialState);

  const addTask = ({ text, type }) => {
    dispatch({ type: "ADD_TASK", text: text, func: type });
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
  const removeColoumn = (category) => {
    dispatch({ type: "DELETE-COLOUMN", category: category });
  };
  const addCol = (text, type) => {
    dispatch({ type: "ADD-COL", text: text, type: type });
  };
  const addBoard = (text) => {
    dispatch({ type: "ADD-BOARD", text: text });
  };
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(state));
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
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
