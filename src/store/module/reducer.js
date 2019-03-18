export default (state, action) => {
  switch (action.type) {
    case 'update_name':
      return {
        ...state,
        name: action.name
      }
    default: return state
      // throw new Error(`"${action.type}" is not implemented`)
  }
}
