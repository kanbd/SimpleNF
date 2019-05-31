const initialState = {
  mylist:[],
  recommendations:[]
}

export default function simpleApp(state = initialState, action) {
  switch (action.type) {
    case 'REOMVE':
      return Object.assign({}, state, {
        mylist: action.data
      })
    case 'ADD':
      let arr = state.recommendations;
      arr.splice(action.index,1);
      return Object.assign({}, state, {
        mylist: [...state.mylist, action.data],
        recommendations: arr
      });
    case 'STORE_DATA':
        return Object.assign({}, state, {
          mylist: action.mylist,
          recommendations: action.recommendations
        });
    default:
      return state
    }
}