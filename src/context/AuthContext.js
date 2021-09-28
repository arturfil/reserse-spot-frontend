import { createContext, useEffect, useState } from "react";
import { useHistory } from 'react-router-dom'
import axios from 'axios';
import {toast} from 'react-toastify';

export const AuthContext = createContext({})

export const AuthProvider = ({children}) => {
  const history = useHistory()
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState({});
  const apiUrl = process.env.REACT_APP_API_URL

  useEffect(() => {
    checkLoggedIn();
  }, [])

  const checkLoggedIn = () => {
    // TODO: renew and return name, uid and role
    const token = JSON.parse(localStorage.getItem('reservespot'));
    if (!token) {
      setLoggedIn(false);
    } else {
      setLoggedIn(true);
    }
  }

  const loginUser = async (obj) => { 
    try {
      const response = await axios.post(`${apiUrl}/auth/login`, obj);
      const { user, token} = response.data;
      setUser(user);
      localStorage.setItem('reservespot', JSON.stringify(token));
      toast.success('Succesfully Logged In')
      setLoggedIn(true);
      history.push('/reserve')
    } catch (error) {
      toast.error("Wrong Credentials")
    }    
  }

  const googleLogin = async (obj) => {
    try {
      const response = await axios.post(`${apiUrl}/auth/googleLogin`, obj);
      const {user, token} = response.data;
      localStorage.setItem('reservespot', JSON.stringify(token));
      setLoggedIn(true);
      toast.success('Succesfully Logged In')
      setUser(user);
      history.push('/reserve')
    } catch (error) {
      
    }
  }

  const logOut = () => {
    localStorage.removeItem('reservespot');
    setLoggedIn(false)
    toast.success('Successfuly Logged Out')
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        loginUser,
        googleLogin,
        loggedIn,
        logOut
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
