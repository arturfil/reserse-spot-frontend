import React from 'react'
import { Col, Row } from 'react-bootstrap'

const ScheduleRow = ({time}) => {
  return (
    <Row className="day-row">
      <Col>
        <h5>
          {time}
        </h5>
      </Col>
      <Col><i className="bi bi-check-circle-fill"></i></Col>
      <Col><i className="bi bi-check-circle-fill"></i></Col>
      <Col><i className="bi bi-x-circle-fill"></i></Col>
      <Col><i className="bi bi-check-circle-fill"></i></Col>
      <Col><i className="bi bi-check-circle-fill"></i></Col>
      <Col><i className="bi bi-check-circle-fill"></i></Col>
      <Col><i className="bi bi-x-circle-fill"></i></Col>
    </Row>
  )
}

export default ScheduleRow
