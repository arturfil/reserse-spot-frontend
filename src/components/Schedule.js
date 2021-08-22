import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import ScheduleRow from './ScheduleRow'

const Schedule = () => {
  return (
    <Container className="mt-5">
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
      <ScheduleRow time="9:00 - 10:00"/>
      <ScheduleRow time="10:00 - 11:00"/>
      <ScheduleRow time="11:00 - 12:00"/>
      <ScheduleRow time="11:00 - 12:00"/>
      <ScheduleRow time="12:00 - 1:00"/>
      <ScheduleRow time="1:00 - 2:00"/>
      <ScheduleRow time="2:00 - 3:00"/>
    </Container>
  )
}

export default Schedule
