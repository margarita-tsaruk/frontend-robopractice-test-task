import { useState, useEffect } from 'react';
import api from '../utils/api';
import Table from '../components/Table';
import Pagination from '../components/Pagination';

function App() {
  const [userData, setUserData] = useState([]);
  const [directionOfSort, setDirectionOfSort] = useState(true);
  const [search, setSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [dataPerPage] = useState(5);
  
    useEffect(() => {
      api.getData()
        .then((res) => {
          setUserData(res);
        })
        .catch(() => {
          console.log("Ошибка!");
        })
  }, []);

  const lastDataIndex = currentPage * dataPerPage;
  const firstDataIndex = lastDataIndex - dataPerPage;
  const currentData = userData.slice(firstDataIndex, lastDataIndex);

  const sortData = (field) => {
   const copiedData = userData.concat();
    
    let sortedData;
    
    if (directionOfSort) {
      sortedData = copiedData.sort (
        (a, b) => {
          return a[field] > b[field] ? 1 : -1 })
    } else {
      sortedData = copiedData.reverse (
        (a, b) => {
          return a[field] > b[field] ? 1 : -1 })
    }

    setUserData(sortedData);
    setDirectionOfSort(!directionOfSort);
  }

  const paginate = pageNumber => setCurrentPage(pageNumber);
  const nextPage = () => setCurrentPage(prev => prev +1);
  const prevPage = () => setCurrentPage(prev => prev -1);

    return (
      <div className="page">
          <div className="container">
          <input
            id="link-avatar"
            type="text"
            name="link"
            className="input"
         s   placeholder="Search"
            onChange={(event) => setSearch(event.target.value)}
          />
          <Table 
            userData={currentData}
            search={search}
            sortData={sortData}
            directionOfSort={directionOfSort}
          />
          <Pagination
            dataPerPage={dataPerPage}
            totalData={userData.length}
            paginate={paginate}
          />
          <button className="button button__back" onClick={prevPage}>Previous Page</button>
          <button className="button button__next" onClick={nextPage}>Next Page</button>
        </div>
      </div>
      );
    }

export default App;
