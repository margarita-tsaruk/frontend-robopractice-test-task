import Data from './Data';
import ErrorBoundary from '../components/ErrorBoundary';

import ArrowUp from '../utils/arrowUp';
import ArrowDown from '../utils/arrowDown';

function Table({ userData, sortData, directionOfSort, search }) {
  
  const filteredData = userData.filter(data => {
    return data.Fullname.toLowerCase().includes(search.toLowerCase());
  })

  return (
    <table className="table">
      <thead>
        <tr className="headings">
          <th onClick={() => {sortData('User')}} className="column__fixed_user">
            User {directionOfSort ? <ArrowUp /> :  <ArrowDown />}
            </th>
          <th onClick={() => {sortData('1')}} className="column__first">1</th>
          <th onClick={() => {sortData('2')}} className="column__numbers">2</th>
          <th onClick={() => {sortData('3')}} className="column__numbers">3</th>
          <th onClick={() => {sortData('4')}} className="column__numbers">4</th>
          <th onClick={() => {sortData('5')}} className="column__numbers">5</th>
          <th onClick={() => {sortData('6')}} className="column__numbers">6</th>
          <th onClick={() => {sortData('7')}} className="column__numbers">7</th>
          <th onClick={() => {sortData('8')}} className="column__numbers">8</th>
          <th onClick={() => {sortData('9')}} className="column__numbers">9</th>
          <th onClick={() => {sortData('10')}} className="column__numbers">10</th>
          <th onClick={() => {sortData('11')}} className="column__numbers">11</th>
          <th onClick={() => {sortData('12')}} className="column__numbers">12</th>
          <th onClick={() => {sortData('13')}} className="column__numbers">13</th>
          <th onClick={() => {sortData('14')}} className="column__numbers">14</th> 
          <th onClick={() => {sortData('15')}} className="column__numbers">15</th>
          <th onClick={() => {sortData('16')}} className="column__numbers">16</th>
          <th onClick={() => {sortData('17')}} className="column__numbers">17</th>
          <th onClick={() => {sortData('18')}} className="column__numbers">18</th>
          <th onClick={() => {sortData('19')}} className="column__numbers">19</th>
          <th onClick={() => {sortData('20')}} className="column__numbers">20</th>
          <th onClick={() => {sortData('21')}} className="column__numbers">21</th>
          <th onClick={() => {sortData('22')}} className="column__numbers">22</th>
          <th onClick={() => {sortData('23')}} className="column__numbers">23</th>
          <th onClick={() => {sortData('24')}} className="column__numbers">24</th>
          <th onClick={() => {sortData('25')}} className="column__numbers">25</th>
          <th onClick={() => {sortData('26')}} className="column__numbers">26</th>
          <th onClick={() => {sortData('27')}} className="column__numbers">27</th>
          <th onClick={() => {sortData('28')}} className="column__numbers">28</th>
          <th onClick={() => {sortData('29')}} className="column__numbers">29</th>
          <th onClick={() => {sortData('30')}} className="column__numbers">30</th>
          <th onClick={() => {sortData('31')}} className="column__numbers">31</th>
          <th onClick={() => {sortData('Monthly total')}} className="column__fixed_last">Monthly total</th>
        </tr>
      </thead>
        <tbody className="table__body">
          {filteredData.map(item => (
            <tr key={item.id} className="column__data"> 
              <td className="column__fixed">{item.Fullname}</td>
              
              <Data data={item.Days[0]} />
              <Data data={item.Days[1]} />
              <Data data={item.Days[2]} />
              <Data data={item.Days[3]} />
              <Data data={item.Days[4]} />
              <Data data={item.Days[5]} />
              <Data data={item.Days[6]} />
              <Data data={item.Days[7]} />
              <Data data={item.Days[8]} />
              <Data data={item.Days[9]} />
              <Data data={item.Days[10]} />
              <Data data={item.Days[11]} />
              <Data data={item.Days[12]} />
              <Data data={item.Days[13]} />
              <Data data={item.Days[14]} />
              <Data data={item.Days[15]} />
              <Data data={item.Days[16]} />
              <Data data={item.Days[17]} />
              <Data data={item.Days[18]} />
              {/* <Data data={item.Days[19]} />
              <Data data={item.Days[20]} />
              <Data data={item.Days[21]} />
              <Data data={item.Days[22]} />
              <Data data={item.Days[23]} />
              <Data data={item.Days[24]} />
              <Data data={item.Days[25]} />
              <Data data={item.Days[26]} />
              <Data data={item.Days[27]} />
              <Data data={item.Days[28]} />
              <Data data={item.Days[29]} />
              <Data data={item.Days[30]} /> */}
            
            </tr> 
          ))}
        </tbody>
    </table>
  )
}

export default Table;