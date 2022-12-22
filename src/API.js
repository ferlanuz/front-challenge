import fetch from "node-fetch";


const getImage = fetch(
   ' https://jsonplaceholder.typicode.com/photos',
   method: 'GET',
   headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data) 
) 
export default API