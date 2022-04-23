import React from 'react'
import Sidebar from '../../components/sidebar';
import Navbar from "../../components/navbar";
import  "./home.scss";
import Widget from '../../components/widget';
import Featured from '../../components/featured';
import Chart from '../../components/chart/Index';
import List from '../../components/table';
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
        <div className='charts'>
          <Featured/>
          <Chart />
        </div>
        <div className="listContainer">
          <div className="listTitle">Latest Containers</div>
          <List />
        </div>
      </div>
    </div>
  )
}

export default Home