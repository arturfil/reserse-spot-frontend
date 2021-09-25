import React, { useEffect, useState } from "react";
import Schedule from "../components/Schedule";
import { getSpotsApi } from "../services/spotApiService";

const Reserve = () => {
  const [spots, setSpots] = useState([]);

  useEffect(() => {
    getSpots();
  }, [])

  const getSpots = async () => {
    const response = await getSpotsApi();
    setSpots(response.data);
  }

  return (
    <div className="container mt-5">
      <h2>Reserve a Spot</h2>
      <div className="reserve">
        <p>Available: </p>
        <i className="bi bi-check-circle-fill"></i>
        <p>Taken:</p>
        <i className="bi bi-x-circle-fill"></i>
      </div>
      <h2>Meetings : {spots.msg}</h2>
      <Schedule />
      {spots && spots.map(m => (
        <h3>{m.concept}</h3>
      ))}
    </div>
  );
};

export default Reserve;
