import React, { Component } from "react";
import "./ModalComponent.css";


import { Button, Modal } from "react-bootstrap";
import { editMovie } from "../Actions/Actions";
import { connect } from "react-redux";

class ModalComponentEdit extends Component {
  state = {
    show: false,
    images: {poster: this.props.movie.images.poster},
    title: this.props.movie.title,
    rating: {watching: this.props.movie.rating.watching},
    year: this.props.movie.year
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };


  handleRating = event => {
    this.setState({
      rating: { watching: event.target.value },
    });
  };
  handlePoster = event => {
    this.setState({
      images: { poster: event.target.value },
    });
  };




  handleClose = () => this.setState({ show: !this.state.show });

  render() {
   //const { images, title, ratin, year } = this.state;
    return (
      <div>
        <Button
          variant="secondary" className="butEdit"
       
          onClick={this.handleClose}
        >
          Edit
        </Button>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Edit movie</Modal.Title>
          </Modal.Header>
          <Modal.Body className="ModalBody">
            <input
              type="text"
              name="rating"
              onChange={this.handleRating}
              value={this.state.rating.watching}
              placeholder="Movie rating"
            />

            <input
              type="text"
              name="images"
              onChange={this.handlePoster}
              value={this.state.images.poster}
              placeholder="Movie image"
            />

            <input
              type="text"
              name="title"
              onChange={this.handleChange}
              value={this.state.title}
              placeholder="Movie name"
            />

            <input
              type="text"
              name="year"
              onChange={this.handleChange}
              value={this.state.year}
              placeholder="Movie releaase year"
            />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
            <Button
              variant="primary"
              onClick={e => {
              
                this.props.editMovie(
                  this.props.movie._id,

                  {
                    _id: this.props.movie._id,
                    title: this.state.title,
                    images: { poster: this.state.images.poster },
                    rating: { watching: this.state.rating.watching }
                  ,
                    year: this.state.year
                  }
                );
          this.handleClose();
        }}
      >
        Validate changes
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  editMovie: (id, newMovie) => dispatch(editMovie(id, newMovie))
});
export default connect(null, mapDispatchToProps)(ModalComponentEdit);
