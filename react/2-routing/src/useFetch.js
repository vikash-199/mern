import { useEffect, useState } from 'react';

function useFetch(url) {
  const [data, setDta] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const res = await fetch(url);
        const result = await res.json();
        setDta(result);
      } catch (err) {
        setError('Somrthing went worng', err);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [url]);

  return { data, loading, error };
}

export default useFetch;
