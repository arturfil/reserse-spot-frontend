import React, { Fragment, useEffect } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import DaysTable from "../components/DaysTable";
import Schedule from "../components/Schedule";
import GoogleLogin from 'react-google-login';

const HomeView = () => {

  useEffect(() => {
    console.log("HERE", process.env.REACT_APP_GOOGLE_CLIENT_ID)
  }, [])

  const responseGoogle = (response) => {
    console.log(response)
  }
  
  return (
    <div className="home">
      <div className="container">
        <h2>Welcome to Think Easy!</h2>
        <h4>Reserve your spot now!</h4>
        <Button className="reserve">
          <Link to="/reserve">Reserve Your Spot</Link>
        </Button>
        <Button className="more" variant="light">
          Google Sign In
        </Button>
        <GoogleLogin
          clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
          buttonText="Login with Google"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={'single_host_origin'}
        />
      </div>
    </div>
  );
};

export default HomeView;
