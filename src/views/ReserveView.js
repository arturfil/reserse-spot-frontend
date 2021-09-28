import React, { useContext } from "react";
import { MeetingContext } from "../context/MeetingContext";
import Schedule from "../components/Schedule";
import { Table } from "react-bootstrap";
import MeetingCard from "../components/MeetingCard";
import { AuthContext } from "../context/AuthContext";

const ReserveView = () => {
  const { meetings } = useContext(MeetingContext);
  const { user } = useContext(AuthContext);

  return (
    <div className="container mt-5">
      <h2>Reserve a Spot {user.name}</h2>
      <div className="row">
        <div className="col">
          <h4>Filter By Day: </h4>
        </div>
        <div className="col">
          <select>
            <option disabled>Choose Week Day</option>
            <option>Monday</option>
            <option>Tuesday</option>
            <option>Wednesday</option>
            <option>Thursday</option>
            <option>Friday</option>
            <option>Saturday</option>
            <option>Sunday</option>
          </select>
        </div>
        <div className="col">
          <h4>Filter By Time</h4>
        </div>
        <div className="col">
          <input
            className="form-control"
            placeholder="Enter time"
            type="text"
            name="time"
          />
        </div>
      </div>
      <div className="row mt-4">
        {meetings.map((m) => (
          <div key={m._id} className="col">
            <MeetingCard meeting={m}/>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReserveView;
