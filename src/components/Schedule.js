import React, { useContext } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { MeetingContext } from '../context/MeetingContext'
import ScheduleRow from './ScheduleRow'

const Schedule = ({props}) => {
  const {days} = useContext(MeetingContext);

  console.log(props)

  return (
    <Container>
      <h2>Totals days in the month {days.days} </h2>
      <h2>Current Day {days.today} </h2>
      <h2>Monday {days.monday} </h2>
      <Row className="day-row">
        <Col>
          <h5>
            Time
          </h5>
        </Col>
        <Col>Monday</Col>
        <Col>Tuesday</Col>
        <Col>Wednesday</Col>
        <Col>Thursday</Col>
        <Col>Friday</Col>
        <Col>Saturday</Col>
        <Col>Sunday</Col>
      </Row>
      {props.map(m => (
        <p key={m._id}>
          {new Date(m.date).getDate()}
          <br/>
          {m.startTime}
        </p>
      ))}
    </Container>
  )
}

export default Schedule
