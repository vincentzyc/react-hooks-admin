export default function reducer(state, action) {
  switch (action.type) {
    case "INIT_LIST":
      return initList(state, action.payload)
    case "DELETE_ITEM":
      return deleteItem(state, action.payload)
    default:
      return state;
  }
}


function initList(state, data) {
  if (!Array.isArray(data)) {
    return state;
  }
  return {
    ...state,
    list: data
  };
}

function deleteItem(state, data) {
  if (typeof data === 'number') {
    return {
      ...state,
      list: state.list.filter((item, i) => i !== data)
    };
  }
  return state
}