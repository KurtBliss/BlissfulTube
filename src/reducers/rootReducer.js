const rootReducer = (state = { clientName: "kurt" }, action) => {
  if (action.type === "CHANGE_NAME") {
    return {
      ...state,
      clientName: action.clientName,
    };
  }
  return state;
};

export default rootReducer;
