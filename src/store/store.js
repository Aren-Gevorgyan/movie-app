import { createStore, combineReducers, applyMiddleware } from 'redux';
import middleware from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';
import popularMovieReduce from './reduce/popularMovieReduce';
import navbarReduce from './reduce/navbarReduce';

const reduce = combineReducers({
  popularMovie: popularMovieReduce,
  navbar: navbarReduce,
  form: formReducer,
});

const store = createStore(reduce, applyMiddleware(middleware));
window.store = store;
export default store;
