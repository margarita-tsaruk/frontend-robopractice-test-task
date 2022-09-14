// import React, { Component } from 'react';
import { useState, useEffect } from 'react';
import api from '../components/api';
import Table from '../components/Table'

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    api.getData()
      .then((res) => {
        console.log(res);
        setData(res)
      })
      .catch(() => {
        console.log("Ошибка!");
      })
  }, [])

    return (
      <div className="container">
        <Table 
        data={data}
        />
       </div>
      );
    }

export default App;
