import { createContext, useEffect, useState } from "react"
import axios from 'axios'

export const MeetingContext = createContext({})

const MeetingProvider = ({children}) => {
  const [meetings, setMeetings] = useState([])
  const [days, setDays] = useState({
    today: '',
    days: 0,
    monday: ''
  });
  const apiUrl = process.env.REACT_APP_API_URL;

  useEffect(() => {
    getMeetings();
    getDaysOfMonth();
  }, [])

  const getDaysOfMonth = () => {
    const date = new Date();
    const year = date.getFullYear()
    const month = date.getMonth() + 1;
    const days = new Date(year, month, 0).getDate();
    const todayMonth = date.getDate();
    const todayWeek = date.getDay();
    const monday = todayMonth - todayWeek + (todayWeek == 0 ? - 6 : 1)
    setDays({
      today: todayMonth,
      days: days,
      monday: monday
    });
  }

  const getMeetings = async () => {
    const response = await axios.get(`${apiUrl}/meetings`)
    setMeetings(response.data);
  }

  return (
    <MeetingContext.Provider
      value={{
        meetings,
        days
      }}
    >
      {children}
    </MeetingContext.Provider>
  )
}

export default MeetingProvider;