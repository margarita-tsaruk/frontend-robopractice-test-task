function Data( { data } ) {
  function calc() {
    if (data === 0) { 
      return '0';
    } else {
      let getDate = (string) => new Date(0, 0,0, string.split('-')[0],string.split('-')[1]);
      const startTime = data.Start;
      const endTime = data.End;
      
      let diff = (getDate(endTime) - getDate(startTime));

      let hours = Math.floor((diff % 86400000) / 3600000);
      let minutes = Math.round(((diff % 86400000) % 3600000) / 60000);
      let result = hours + ':' + minutes;

      return result;
    }
  }
  // console.log(calc())
  // const str = (calc());
  // let arr = str.split('-');
  // console.log(arr);

  //  const sum = arr.reduce(function (sum, current) {
  //     return sum + current;
  //   }, 0);
  //   console.log(sum)

  return (
    <> 
      <td>{calc()}</td>
    </> 
  )
}

export default Data;
