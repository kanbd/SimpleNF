const initialState = {
  mylist:[],
  recommendations:[]
}

function simpleApp(state = initialState, action) {
  switch (action.type) {
    case REOMVE:
      return null;
    case ADD:
      return null;
    default:
      return state
    }
}