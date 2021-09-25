import axios from 'axios';

export const getSpotsApi = async () => {
  // return fetch('http://localhost:5000/api/meetings', {
  //   method: 'GET',
  // })
  // .then(response => {
  //   return response.json()
  // })
  // .catch(error => console.log(error));

  const token = await JSON.parse(localStorage.getItem('jwtreservespot'));
  const response = await axios.get('http://localhost:5000/api/meetings', {
    headers: {
      'Authorization': `${token}`
    }
  });
  return response;
}