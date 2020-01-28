import React, { Component } from "react";
import "./ModalComponent.css";
import { Button, Modal } from "react-bootstrap";
import {addMovie} from '../Actions/Actions'
import { connect } from "react-redux";

class ModalComponent extends Component {
  state = {
    show: false,
    title:"",
    rating:0,
    year:"",
    images:""
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleClose = () => this.setState({ show: !this.state.show });

  render() {
  
    return (
      <div>
        <Button
          
          variant="secondary"
          className="addM"
          onClick={this.handleClose}
        >
          Add new movie
        </Button>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add new movie</Modal.Title>
          </Modal.Header>
          <Modal.Body className="ModalBody">
            <input
              type="text"
              name="rating"
              onChange={this.handleChange}
              value={this.state.rating.watching}
              placeholder="Movie rating"
            />

            <input
              type="text"
              name="images"
              onChange={this.handleChange}
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
                
                this.props.addMovie({
                  _id: Date.now(),
                  title: this.state.title,
                  images: { poster: this.state.images },
                  rating: { watching: this.state.rating},
                 year: this.state.year
                } );




      
                this.handleClose();
              }}
            >
              Add movie
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  addMovie: (newm) =>
    dispatch(addMovie(newm))
});
export default connect(null, mapDispatchToProps)(ModalComponent);