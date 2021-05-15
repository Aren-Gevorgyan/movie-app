import Navbar from './navbar/Navbar';
import {connect} from 'react-redux';
import {watchMoviesByYear} from '../../store/reduce/popularMovieReduce';
import {getPage} from '../../store/reduce/popularMovieSelector';
import getGenresItem from '../../store/reduce/navbarSelector';

const mapStateToProps = (state) => {
    return {
        genresItem: getGenresItem(state),
        page: getPage(state),
    }
}

export default connect(mapStateToProps, {watchMoviesByYear})(Navbar);