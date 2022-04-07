import React from 'react'
import Sidebar from '../../components/sidebar';
import Navbar from "../../components/navbar";
import  "./home.scss";
import Widget from '../../components/widget';
const Home = () => {
  return (
    <div className='home'>
      <Sidebar/>
      <div className="homeContainer">
        <Navbar/>
        <div className="widgets">
          <Widget type="Customers"/>
          <Widget type="Orders"/>
          <Widget type="Total Books"/>
          <Widget type="Total Sales"/>
        </div>
      </div>
    </div>
  )
}

export default Home