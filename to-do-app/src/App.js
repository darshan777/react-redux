import React from 'react';
import './App.css';
import Table from './table-component/table'
import Form from './form-component/form'
import Header from './header-component/header'

function App() {
  
  return (
    <div className="App" style={{alignContent:"center"}}>
      <h1>Hey Darshan Welcome back!!</h1>
      <Table />
      <Header />
    </div>
  );
}

export default App;
