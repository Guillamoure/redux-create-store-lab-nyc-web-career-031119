
function candyReducer(state = [], action) {
  switch (action.type) {
    case 'ADD_CANDY':
      return [...state, action.candy];
    default:
    console.log("Candy state!", state)
      return state;
  }
}

export default candyReducer;
