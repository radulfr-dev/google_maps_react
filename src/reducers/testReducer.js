const testReducer = (state = "Hi", action) => {
  switch (action.type) {
    case "TEST":
      return state;
    default:
      return state;
  }
};

export default testReducer;