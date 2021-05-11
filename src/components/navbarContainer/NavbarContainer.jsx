import Navbar from './navbar/Navbar';
import {connect} from 'react-redux';
import {watchMovieByYear} from '../../store/reduce/popularMovieReduce';
import {getPage} from '../../store/reduce/popularMovieSelector';

const mapStateToProps = (state) => {
    return {
        page: getPage(state),
    }
}

export default connect(mapStateToProps, {watchMovieByYear})(Navbar);