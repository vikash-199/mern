import { useEffect, useState } from 'react';

function useFetch(url) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState();

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const res = await fetch(url);
        const result = await res.json();
        setData(result);
      } catch (err) {
        setError('Something went worng', err);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [url]);

  return { data, error, loading };
}
export default useFetch;

// import { useEffect, useState } from 'react';

// function useFetch(url) {
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     async function fetchData() {
//       try {
//         const res = await fetch(url);
//         const result = await res.json();
//         setData(result);
//       } catch (err) {
//         setError('Something went worng.', err);
//       } finally {
//         setLoading(false);
//       }
//     }
//     fetchData();
//   }, [url]);

//   return { data, error, loading };
// }

// export default useFetch;
