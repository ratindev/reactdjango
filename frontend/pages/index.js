// frontend/pages/index.js

useEffect(() => {
  axios.get('http://localhost:8000/api/items/')  // Replace with your actual API endpoint
    .then(response => {
      setData(response.data);
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
}, []);
