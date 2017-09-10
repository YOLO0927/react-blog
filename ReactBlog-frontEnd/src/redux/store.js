import { createStore } from 'redux';
import blog from './reducers';

const store = createStore(blog);

export default store;
