import React from "react";
import { useDispatch } from "react-redux";

const BotaoAdd = () => {
  const dispatch = useDispatch();
  const [texto, setTexto] = React.useState("");

  function Incluir(item) {
    dispatch({ type: "ADD", texto: item });
    setTexto("");
  }

  return (
    <>
      <input
        type="text"
        value={texto}
        onChange={event => setTexto(event.target.value)}
      />
      <button onClick={() => Incluir(texto)}>Add</button>
    </>
  );
};

export default BotaoAdd;
