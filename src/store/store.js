import { createStore, combineReducers } from 'redux';
import popularMovieReduce from '../store/reduce/popularMovieReduce';
import headerReduce from '../store/reduce/headerReduce';

const state = combineReducers({
    popularMovie: popularMovieReduce,
    header: headerReduce,
})

const store = createStore(state);
window.store = store;
export default store;