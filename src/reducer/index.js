export default (state, action) => {
  switch (action.type) {
    case 'update_name':
      return {
        ...state,
        name: action.name
      }
    default:
      return state
  }
  // return {
  //   moduleA: reducer(state.moduleA, action),
  //   moduleB: reducer(state.moduleB, action),
  // }
}
