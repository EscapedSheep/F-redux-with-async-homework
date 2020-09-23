export const setUserInfo = info => {
  // eslint-disable-line
  return {
    type: 'SET_USER_INFO',
    payload: info
  };
};

export const clearUserInfo = () => {
  // eslint-disable-line
  return {
    type: 'CLEAR_USER_INFO'
  };
};

const loading = () => {
  return {
    type: 'LOADING'
  };
};

export const signIn = () => dispatch => {
  dispatch(loading());
  return fetch('https://my-json-server.typicode.com/kevindongzg/demo/login')
    .then(res => res.json())
    .then(data => dispatch(setUserInfo({ logged: true, ...data })));
};
