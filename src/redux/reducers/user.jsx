
const initialState = {
  id: null,
  avatar: null,
  name: null,
  lasName: null,
};

function reducer(state = initialState,{ type, payload}) {
 switch (type) {
  case 'login': {
    return true;
  }
  default:
    return state;
 }

  // Por ahora, no maneja ninguna acción
  // y solo devuelve el estado que recibimos.
}
export default reducer;