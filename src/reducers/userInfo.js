const userInfo = (state = { logged: false, loading: false }, action) => {
  if (action.type === 'SET_USER_INFO') {
    return { ...state, ...action.payload, loading: false, logged: true };
  }
  if (action.type === 'CLEAR_USER_INFO') {
    return { logged: false };
  }
  if (action.type === 'LOADING') {
    return {
      ...state,
      loading: true
    };
  }
  return state;
};

export default userInfo;
