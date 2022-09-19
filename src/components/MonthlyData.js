function MonthlyData() {
  const arr = [
		{
			"Date": "2022-05-01",
			"Start": "14-28",
			"End": "15-18"
		},
		{
			"Date": "2022-05-02",
			"Start": "10-32",
			"End": "12-18"
		},
		{
			"Date": "2022-05-03",
			"Start": "10-14",
			"End": "13-18"
		},
	]

	function handleCalculation(day) {
    if (day === 0) { 
      return '0';
    } else {
      let getDate = (string) => new Date(0, 0,0, string.split('-')[0],string.split('-')[1]);
      const startTime = day.Start;
      const endTime = day.End;
      
      let diff = (getDate(endTime) - getDate(startTime));
  
      let hours = Math.round(diff / 60000);
      let result = hours;
  
      return result;
    }
	}

	function handleMonthlyTotal() {
	  console.log(arr)
  
	  const newArray = arr.map((day) => {
			const data = handleCalculation(day)
			console.log(data)
			return data;
		})
   
		const sum = newArray.reduce(function (total, amount) {
	  return total + amount;
	})
  
	 return sum;
}

	console.log(handleMonthlyTotal())
}

export default MonthlyData;