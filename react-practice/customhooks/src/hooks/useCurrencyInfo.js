// mostly hooks return java script

import {useState, useEffect} from 'react' //we can use pre buuilthooks in hooks

// function hello(){
//     return [a,b]
// }  // even this is a hook

function useCurrencyInfo(currency) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCurrencyData = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`
        );
        const json = await response.json();
        // Log to see the structure of the response
        console.log('Fetched data:', json);

        // Assuming the JSON response contains currency data under `currency`
        if (json) {
          setData(json); // or setData(json[currency]) if needed
        } else {
          setError('No data found');
        }
      } catch (err) {
        setError('Failed to fetch currency data');
      } finally {
        setLoading(false);
      }
    };

    fetchCurrencyData();
  }, [currency]);

  return { data, loading, error };
}

export default useCurrencyInfo;
