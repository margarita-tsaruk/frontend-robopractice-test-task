
function Data( { data } ) {
  console.log(data)

  const date = data.Days[0].Date;
 
  const startTime = data.Days[0].Start;
  const endTime = data.Days[0].End;

  const date2 = data.Days[1].Date;
	const startTime2 = data.Days[1].Start;
  const endTime2 = data.Days[1].End;

	
  let getDate = (string) => new Date(0, 0,0, string.split('-')[0],string.split('-')[1]);
  let diff = (getDate(endTime) - getDate(startTime));

  let hours = Math.floor((diff % 86400000) / 3600000);
  let minutes = Math.round(((diff % 86400000) % 3600000) / 60000);
  let result = hours + ':' + minutes;

  function calc() {
    if (date !== '2021-05-01') {
      return result = '0';
    } else {
      return result;
    }
  }
 
  //данные второго столбца
  let diff2 = (getDate(endTime2) - getDate(startTime2));
  let hours2 = Math.floor((diff2 % 86400000) / 3600000);
  let minutes2 = Math.round(((diff2 % 86400000) % 3600000) / 60000);
  let result2 = hours2 + ':' + minutes2;
  
  function calc2() {
    if (date2 !== '2021-05-02') {
      return result2 = '0';
    } else {
      return result2;
    }
  }

	return (
   <tr>
      <td>{data.Fullname}</td>
      <td>{calc()}</td>
      <td>{calc2()}</td>
    </tr>
  )
}

export default Data;
