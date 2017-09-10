import { combineReducers } from 'redux';

const defaultUser = {
  name: '游客',
  avatar: '/static/male-70.png',
  bio: '',
  gender: 'x'
};

function user (state = defaultUser, action) {
  switch (action.type) {
    case 'SIGN_IN':
      return Object.assign({}, action.data);
    case 'SIGN_OUT':
      return Object.assign({}, defaultUser);
    default:
      return state;
  }
}

const blog = combineReducers({
  user
});

export default blog;
