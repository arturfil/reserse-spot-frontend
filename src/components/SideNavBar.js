import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import CustomButton from "./CustomButton";

const SideNavBar = () => {
  const { logOut, loggedIn, user } = useContext(AuthContext);

  return (
    <div className="sidenavbar container">
      <ul>
        <li>
          <Link to="/">Think Easy</Link>
        </li>
        {loggedIn ? (
          <>
            <li>
              <Link to="/reserve">Reserve</Link>
            </li>
            <li>
              <Link to="/reserve">Profile</Link>
            </li>
            <li>
              <Link to="/reserve">Create New Meeting</Link>
            </li>
            <li>
              <CustomButton
                btnStyles={{ marginTop: "5px" }}
                title="Log Out"
                func={logOut}
              />
            </li>
          </>
        ) : (
          <li>
            <Link to="/login">Log In</Link>
          </li>
        )}
      </ul>
    </div>
  );
};

export default SideNavBar;
