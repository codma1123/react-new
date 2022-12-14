export  function createAsyncDispatcher(type, promiseFn) {
  const SUCCESS = `${type}_SUCCESS`;
  const ERROR = `${type}_ERROR`;
  
  async function actionHandler(dispatch, ...rest) {
    dispatch({ type }); 
    try {
      const data = await promiseFn(...rest);
      dispatch({ type: SUCCESS, data }); 
    } catch (e) {
      dispatch({ type: ERROR, error: e });
    }
  }

  return actionHandler; // 만든 함수를 반환합니다.
}

export const initialAsyncState = {
  users: {
    loading: false,
    data: null,
    error: null  
  },
  user: {
    loading: false,
    data: null,
    error: null  
  }
}

const loadingState = {
  loading: true,
  data: null,
  error: null 
}

const success = data => ({
  loading: false,
  data,
  error: null
})

const error = error => ({
  loading : false,
  data: null,
  error
})

export const createAsyncHandler = (type, key) => {
  const SUCCESS = `${type}_SUCCESS`;
  const ERROR = `${type}_ERROR`;

  function handler(state, action) {
    switch (action.type) {
      case type:
        return {
          ...state,
          [key]: loadingState
        };
      case SUCCESS:
        return {
          ...state,
          [key]: success(action.data)
        };
      case ERROR:
        return {
          ...state,
          [key]: error(action.error)
        };
      default:
        return state;
    }
  }

  return handler
}
