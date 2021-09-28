import { useContext, useState } from "react";
import { ToastContainer } from "react-bootstrap";
import CustomButton from "../components/CustomButton"
import GoogleButton from "../components/GoogleButton"
import { AuthContext } from "../context/AuthContext";

const LoginView = () => {
  const { loginUser } = useContext(AuthContext)
  const [user, setUser] = useState({
    email: '',
    password: '',
  })

  const handleChange = (event) => {
    setUser({
      ...user,
      [event.target.name]: event.target.value
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    loginUser(user)
    setUser({
      email: '',
      password: ''
    })
  }

  return (
    <div className="container mt-5">
      <ToastContainer />
      <form className="form">
        <h2>Login View</h2>
        <input 
          onChange={handleChange}
          value={user.email}
          name="email"
          placeholder="Email"
          type="text" 
          className="form-control" 
        />
        <input 
          name="password"
          onChange={handleChange}
          value={user.password}
          placeholder="Password"
          type="password" 
          className="form-control" 
        />
        <CustomButton 
          func={handleSubmit}
          btnStyles={{textAlign: 'center'}}
          className="form-control"
          title="Log In"
        />
        <GoogleButton />
      </form>
    </div>
  )
}

export default LoginView
