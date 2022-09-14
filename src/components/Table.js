function Table(data) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>User</th>
          <th>1</th>
          <th>2</th>
          <th>3</th>
          <th>4</th>
          <th>5</th>
          <th>6</th>
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
          <th>Monthly total</th>
        </tr>
			</thead><tbody>
					{data.data.map(item => (
						<tr key={item.id}>
							<td>{item.id}</td>
							<td>{item.fullName}</td>
							<td>{item.days}</td>
						</tr>
					))}
				</tbody>
    </table>
  )
}

export default Table;