import { Component } from "./Component";
import { useGlobalContext } from "./context";
export const ComponentContainer = ({ name }) => {
  const { state } = useGlobalContext();
  return (
    <div>
      {state.coloumns.map((item) => {
        const { text, type } = item;
        if (type === name) {
<<<<<<< HEAD
          return <Component title={text} />;
=======
          return <Component boarderName={name} title={text} />;
>>>>>>> 7adf42ff4fffb3bdc6f27cada53d484020c15aaa
        }
      })}
    </div>
  );
};
