import React from "react";
import "./MovieDescription.css";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

class MovieDescription extends React.Component {
  state = {
    id: this.props.match.params._id
  };

  render() {

    
    
    const myTab = this.props.movies.filter(e => e._id === (this.state.id));
    if (myTab.length === 0) {
      return <Redirect to="/" />;
    } else {
      
      const { title, year,images , rating } = myTab[0];
      
      return (
        <div className="details">
          <img  className="poster" src={images.poster} alt="" />
          <div className="movie-details">
            <p>
              <span>Movie Name:</span> {title}
            </p>
            <p>
              <span>Release Year:</span> {year}
            </p>
            <p>
              <span>Rating:</span>
              <span style={{ color: "gold" }}>★{rating.watching}</span>
            </p>
          </div>
        </div>
      );
    }
  }
}
const mapState = state => ({
  movies: state.movies
});
export default connect(mapState)(MovieDescription);
