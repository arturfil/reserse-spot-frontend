import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'react-toastify/dist/ReactToastify.css'
import './styles/style.scss'
import { AuthProvider } from './context/AuthContext';
import MeetingProvider from './context/MeetingContext';

ReactDOM.render(
  <React.StrictMode>
    <MeetingProvider>
      <AuthProvider>
        <App />
      </AuthProvider>
    </MeetingProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
