import React from 'react'
import DataTable from '../../components/datatable';
import Navbar from '../../components/navbar';
import Sidebar from '../../components/sidebar';
import "./List.scss";

const List = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <DataTable/>
      </div>
    </div>
  )
}

export default List