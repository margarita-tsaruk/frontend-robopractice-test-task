function Data( { data } ) {
  
  console.log(data) //объект Days у одного item
  
 console.log(data.Date.length) // 10
  
  const date = data.Date.length;
  console.log(date)  //10
 
  const startTime = data.Start;
  const endTime = data.End;

  let getDate = (string) => new Date(0, 0,0, string.split('-')[0],string.split('-')[1]);
  let diff = (getDate(endTime) - getDate(startTime));

  let hours = Math.floor((diff % 86400000) / 3600000);
  let minutes = Math.round(((diff % 86400000) % 3600000) / 60000);
  let result = hours + ':' + minutes;

  function calc() {
    if (date === 0) {   //здесь пытаюсь сравнить массив
      return result = '0';
    } else {
      return result;
    }
  }
 
  return (
    <> 
      <td className="column__first">{calc()}</td>
    </> 
  )
}

export default Data;
