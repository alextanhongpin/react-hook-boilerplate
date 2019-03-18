import React, { useCallback } from 'react'
import { useDispatch, useMappedState } from 'redux-react-hook'

const View = () => {
  const mapState = useCallback((state) => {
    return {
      name: state.module.name
    }
  }, [])

  const { name } = useMappedState(mapState)
  const dispatch = useDispatch()
  const updateName = useCallback(() => {
    dispatch({ type: 'update_name', name: 'updated' })
  }, [])

  return (
    <div><button onClick={updateName}>Update</button>{name}</div>
  )
}

export default View
