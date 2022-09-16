import Data from './Data';

function Table({ userData, sortData }) {

  return (
    <table className="table">
      <thead>
        <tr>
          <th>User</th>
          <th onClick={() => {sortData('1')}}>1</th>
          <th onClick={() => {sortData('2')}}>2</th>
          <th onClick={() => {sortData('3')}}>3</th>
          <th onClick={() => {sortData('4')}}>4</th>
          <th onClick={() => {sortData('5')}}>5</th>
          <th onClick={() => {sortData('6')}}>6</th>
          <th>7</th>
          <th>7</th>
          <th>9</th>
          <th>10</th>
          <th>11</th>
          <th>12</th>
          <th>13</th>
          <th>14</th> 
          <th>15</th>
          <th>16</th>
          <th>17</th>
          <th>18</th>
          <th>19</th>
          <th>20</th>
          <th>21</th>
          <th>22</th>
          <th>23</th>
          <th>24</th>
          <th>25</th>
          <th>26</th>
          <th>27</th>
          <th>28</th>
          <th>29</th>
          <th>30</th>
          <th>31</th>
          <th>Monthly total</th>
        </tr>
      </thead>
        <tbody>
          {userData.map(item => (
            <tr key={item.id}> 
              <td>{item.Fullname}</td>
              <Data
                 data={item}
              />
            </tr> 
          ))}
        </tbody>
    </table>
  )
}

export default Table;