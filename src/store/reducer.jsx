const reducers = {
  setTodos(state, data) {
    switch (data.type) {
      case "ADD_TODO":
        // return current state if empty
        if (!data.payload) {
          return state;
        }
        // return current state if duplicate
        if (state.todos.includes(data.payload)) {
          return state;
        }
        return {
          ...state,
          todos: [...state.todos, data.payload]
        };
      case "COMPLETE":
        return {
          ...state,
          todos: state.todos.filter(t => t !== data.payload)
        };
      default:
        return state;
    }
  }
}

export default function reducer(state, action) {
  return reducers[action.func](state, action.data)
}



