import React, { Component } from "react";
import MovieCard from "./MovieCard";
import { connect } from "react-redux";
import "./MovieList.css";
import { fetchMovies} from '../Actions/Actions'
class MovieList extends Component{

  componentDidMount()
  {
    this.props.getMovies()
  }
  render() {
    return (
      <div className="MovieList">
        {this.props.movies
          .filter(
            el =>
              el.title
                .toUpperCase()
                .includes(this.props.filterName.toUpperCase()) &&
             ( el.rating.watching) >= this.props.searchRate 
          )
          .map((el, i) => (
            <MovieCard key={el._id} id={el._id} movie={el} />
          ))}
      </div>
    );
  }
}
const mapStatetoProps = state => {
  return {
    movies: state.movies,
    filterName: state.searchName,
    searchRate: state.searchRating
  };
  

};


const mapDispatchToProps = dispatch => ({
  getMovies: () => (dispatch(fetchMovies()))
})

export default connect(mapStatetoProps, mapDispatchToProps)(MovieList);
