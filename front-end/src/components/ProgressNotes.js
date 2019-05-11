import React, { Component } from 'react';
import { connect } from 'react-redux';
import ExampleNote from './ExampleNote';
import { getNotes } from '../actions/actions';
import './styles/ProgressNotes.sass';
import CustomModal from './CustomModal';
import EditModal from './EditModal';
import ProgressForm from './ProgressForm';

class ProgressNotes extends Component {
  state = {
    notes: []
  };

  componentDidMount() {
    this.props.getNotes();
    this.setState({ notes: [...this.props.notes] });
  }

  render() {
    const isMenuShowing = this.state.isMenuShowing;
    return (
      <div className="notes-container">
        <ExampleNote />
        {this.props.notes.map(note => {
          return (
            <div className="note" key={note.id}>
              <div>
                <EditModal noteId={note.id} />
                <CustomModal noteId={note.id} />
              </div>
              <p>Weight: {note.weight}</p>
              <p>Waist: {note.waist}</p>
              <p>Arms: {note.arms}</p>
              <p>Legs: {note.legs}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    notes: state.notes,
    error: state.error
  };
};

export default connect(
  mapStateToProps,
  { getNotes }
)(ProgressNotes);
