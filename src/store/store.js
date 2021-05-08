import { createStore, combineReducers, applyMiddleware } from 'redux';
import popularMovieReduce from '../store/reduce/popularMovieReduce';
import navbarReduce from '../store/reduce/navbarReduce';
import middleware from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';

const reduce = combineReducers({
    popularMovie: popularMovieReduce,
    navbar: navbarReduce,
    form: formReducer,
})

const store = createStore(reduce, applyMiddleware(middleware));
window.store = store;
export default store;