import React from "react";
import { useSelector, useDispatch } from "react-redux";
import BotaoAdd from "./BotaoAdd";

const ListaSimples = () => {
  const lista = useSelector(state => state.data);

  return (
    <>
      <BotaoAdd />
      <ul>
        {lista.map(item => (
          <li>{item}</li>
        ))}
      </ul>
    </>
  );
};

export default ListaSimples;
