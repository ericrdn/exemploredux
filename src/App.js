import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import ListaSimples from "./componentes/ListaSimples";

function App() {
  return (
    <Provider store={store}>
      <ListaSimples />
    </Provider>
  );
}

export default App;
