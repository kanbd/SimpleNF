export const ADD = movie => ({
  type:'ADD',
  data: movie.data,
  index: movie.index
})
export const REMOVE = movie => ({
  type:'REMOVE',
  data: movie.data,
  index: movie.index
})
export const storeData = data => ({
  type:'STORE_DATA',
  mylist: data.mylist,
  recommendations: data.recommendations
})