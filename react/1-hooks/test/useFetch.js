import { useEffect, useState } from 'react';

function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      async function fetchData() {
        const response = await fetch(url);
        const result = await response.json();
        setData(result);
      }
      fetchData();
    } catch (err) {
      setError(err);
      console.log(err);
    }
  }, [url]);
}

export default useFetch;
