import React from 'react'
import DaysTable from '../components/DaysTable'
import Schedule from '../components/Schedule'

const Home = () => {
  return (
    <div className="container mt-5">
      <h2>Welcome to Think Easy!</h2>
      <h4>Reserve your spot now!</h4>
      {/* <DaysTable/> */}
      <Schedule/>
    </div>
  )
}

export default Home
