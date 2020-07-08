import { connect } from 'react-redux';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction'; // needed for dayClick
import '@fullcalendar/core/main.css';
import { clickedDate, updateEvent } from '../actions/actions.js';
import listWeek from '@fullcalendar/list';

import 'react-calendar/dist/Calendar.css';
import "react-big-calendar/lib/css/react-big-calendar.css";

import React, { Component } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";

import "react-big-calendar/lib/addons/dragAndDrop/styles.css";
import "react-big-calendar/lib/css/react-big-calendar.css";
import './styles/Calendar.scss';

const localizer = momentLocalizer(moment);
const DnDCalendar = withDragAndDrop(Calendar);

class TCalendar extends Component {
  state = {
    events: [
      {
        start: moment().subtract(10, "days").toDate(),
        end: moment().subtract(9, "days").toDate()
          ,
        title: "Some title"
      }
    ]
  };

  onEventResize = ({ event, start, end, allDay }) => {
    this.setState(state => {
      state.events[0].start = start;
      state.events[0].end = end;
      return { events: state.events };
    });
  };

  onEventDrop = ({ event, start, end, allDay }) => {
    console.log(start);
    this.setState(state => {
      state.events[0].start = start;
      state.events[0].end = end;
      return { events: state.events };
    });
  };

  handleDateClick = (data) => {
    if (data.start.toISOString() === this.props.dateClicked) {
      this.props.clickedDate('');
    } else {
      this.props.clickedDate(data.start.toISOString());
    }
  };

  gotPro = (date) => {
    console.log(date, date.toISOString(), 'eyespy', this.props.dateClicked)
    if (date.toISOString() === this.props.dateClicked)
    return {
      className: 'clickedDate',
    };
  else return {};
  }

  render() {
    console.log(this.state.events[0].start,'ready, set, go!')

    return (
      <div className="calendar">
        <DnDCalendar
          defaultDate={moment().toDate()}
          defaultView="month"
          events={this.props.events}
          localizer={localizer}
          
          onEventDrop={this.onEventDrop}
          onEventResize={this.onEventResize}
          resizable
          selectable={true}
          onSelectSlot={this.handleDateClick}
          dayPropGetter={this.gotPro}
        />
      </div>
    );
  }
}


const mapStateToProps = state => {
  return {
    users: state.users,
    events: state.events,
    categories: state.categories,
    exercises: state.exercises,
    dateClicked: state.dateClicked
  };
};

export default connect(
  mapStateToProps,
  { clickedDate, updateEvent }
)(TCalendar);
