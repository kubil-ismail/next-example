import actionType from './actionType';

const defaultState = {
  loading: false,
  result: [],
  options: [],
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case actionType.GET: {
      return {
        ...defaultState,
        loading: true,
      };
    }
    case actionType.SET: {
      return {
        ...defaultState,
        loading: false,
      };
    }
    case actionType.UPDATE: {
      return {
        ...defaultState,
        loading: false,
      };
    }
    case actionType.DELETE: {
      return {
        ...defaultState,
        loading: false,
      };
    }
    // DEFAULT
    default: {
      return state;
    }
  }
};

export default reducer;
