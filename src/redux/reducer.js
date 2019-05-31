const initialState = {
  mylist:[],
  recommendations:[]
}

export default function simpleApp(state = initialState, action) {
  switch (action.type) {
    case 'REMOVE':
      let mylist_arr = state.mylist;
      mylist_arr.splice(action.index,1);
      return Object.assign({}, state, {
        mylist: mylist_arr,
        recommendations: [...state.recommendations, action.data]
      });
    case 'ADD':
      let rec_arr = state.recommendations;
      rec_arr.splice(action.index,1);
      return Object.assign({}, state, {
        mylist: [...state.mylist, action.data],
        recommendations: rec_arr
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