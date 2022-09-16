import { useState, useEffect } from 'react';
import api from '../components/api';
import Table from '../components/Table'

function App() {
  const [userData, setUserData] = useState([]);

  const sortData = (field) => {
    const copyData = userData.concat();
    const sortedData = copyData.sort (
      (a, b) => {
        return a[field] > b[field] ? 1: -1 }
    );
    console.log(sortedData);
  }

  useEffect(() => {
    api.getData()
      .then((res) => {
        console.log(res);
        setUserData(res)
      })
      .catch(() => {
        console.log("Ошибка!");
      })
  }, [])

    return (
      <div className="container">
        <Table 
          userData={userData}
          sortData={sortData}
        />
       </div>
      );
    }

export default App;
