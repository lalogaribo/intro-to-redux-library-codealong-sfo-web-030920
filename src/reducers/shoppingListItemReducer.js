export default function shoppingListItemReducer(
  state = {
    items: [],
    name: "Eduardo",
  },
  action
) {
  switch (action.type) {
    case "INCREASE_COUNT":
      return {
        ...state,
        items: state.items.concat(state.items.length + 1),
      };
    case "CHANGE_NAME":
      return { ...state, name: action.payload.name };
    default:
      return state;
  }
}
