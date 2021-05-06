import {connect} from "react-redux";
import {getInitialMovie} from "../../store/reduce/popularMovieReduce";
import Header from "./header/Header";

const mapStateToProps = (state) => {
      return {}
}

export default connect(mapStateToProps, {getInitialMovie})(Header);