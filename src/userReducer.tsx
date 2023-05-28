const initial = {
  items: []
};

export const userReducer = (state = initial, action) => {
  switch (action.type) {
    case "ADD":
      return {
        ...state,
        items: [...state.items, action.payload.item]
      };
    default:
      return state;
  }
};
