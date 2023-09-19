import { Component } from "./Component";
import { useGlobalContext } from "./context";
export const ComponentContainer = ({ name }) => {
  const { state } = useGlobalContext();
  return (
    <div>
      {state.coloumns.map((item) => {
        const { text, type } = item;
        if (type === name) {
          return <Component title={text} />;
        }
      })}
    </div>
  );
};
