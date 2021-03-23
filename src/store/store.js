import { createStore, combineReducers, applyMiddleware } from 'redux';
import popularMovieReduce from '../store/reduce/popularMovieReduce';
import headerReduce from '../store/reduce/headerReduce';
import middleware from 'redux-thunk';

const reduce = combineReducers({
    popularMovie: popularMovieReduce,
    header: headerReduce,
})

const store = createStore(reduce, applyMiddleware(middleware));
window.store = store;
export default store;