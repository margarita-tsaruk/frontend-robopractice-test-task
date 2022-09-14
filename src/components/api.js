class Api {
  getData() {
    return fetch(`http://localhost:8080/api/users`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
      }
   })
   .then((res) => {
      if(res.ok) { 
        return res.json()
      } else { 
        return Promise.reject(`Ошибка: ${res.status}`); 
      } 
   })
  }
}

const api = new Api()
  
export default api;