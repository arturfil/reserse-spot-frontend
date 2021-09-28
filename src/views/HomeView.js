import { Button } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import CustomButton from "../components/CustomButton";

const HomeView = () => {
  const history = useHistory()

  return (
    <div className="home">
      <div className="container">
        <h2>Welcome to Think Easy!</h2>
        <h4>Reserve your spot now!</h4>
        <Button className="reserve">
          <Link to="/reserve">Reserve Your Spot</Link>
        </Button>
        {/* <Link to="/login" className="more btn btn-primary" variant="light">
          Log In
        </Link> */}
        <CustomButton
          func={() => history.push('/login')}
          title="Log In"
          btnStyles={{color: 'white', borderRadius: '3px'}}
        />
      </div>
    </div>
  );
};

export default HomeView;
