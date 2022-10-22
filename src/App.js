import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import Contacts from "./components/Contacts";
import Table from './components/Table'


function App() {
  return (
    <div className="App">
       <Table />
       {/* <Contacts /> */}
    </div>
  );
}

export default App