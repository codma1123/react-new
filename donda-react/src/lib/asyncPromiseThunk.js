export const createPromiseThunk = (type, promiseCreator) => {

  const [UPDATE, LOAD, FAILURE] = [`${type}_CALL`, `${type}_LOAD`, `${type}_ERROR` ]

  return param => async dispatch => {

    dispatch({type: CALL})

    try {
      const res = await promiseCreator(param)
      dispatch({type: LOAD, data: res.data})
    } catch (e) {
      dispatch({type: FAILURE, error: e})
    }

  }
}