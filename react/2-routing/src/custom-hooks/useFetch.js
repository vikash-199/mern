import { useEffect, useState } from 'react';

function useFetch(url) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const res = await fetch(url);
        const result = await res.json();
        setData(result);
      } catch (err) {
        setError('Something worng happen ', err);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [url]);

  return { data, error, loading };
}

export default useFetch;
