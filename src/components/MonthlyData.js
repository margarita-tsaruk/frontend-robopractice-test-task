function MonthlyData(data) {
  function handleCalculation(data) {
    let hours = Math.trunc(data.data/60);
    let minutes = data.data % 60;
    return hours + ':' + minutes;
  }

  return (
    <> 
      <td className="column__fixed_last">{handleCalculation(data)}</td>
    </> 
  )
}

export default MonthlyData;