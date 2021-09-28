import { useContext } from 'react';
import GoogleLogin from 'react-google-login';
import { AuthContext } from '../context/AuthContext';

const GoogleButton = () => {
  const { googleLogin, user } = useContext(AuthContext)

  const responseGoogle = (resp) => {
    const { email, name} = resp.profileObj;
    googleLogin({name, email})
  }

  return (
    <GoogleLogin
      className="form-control google-btn"
      clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
      buttonText="Login with Google"
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
      cookiePolicy={"single_host_origin"}
    />
  );
};

export default GoogleButton;
