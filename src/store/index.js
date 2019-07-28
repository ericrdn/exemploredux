import { createStore } from "redux";

const INITIAL_STATE = {
  data: []
};

function estadoGeral(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "  ":
      return { ...state, data: [...state.data, action.texto] };
    default:
      return state;
  }
}

const store = createStore(estadoGeral);

export default store;
