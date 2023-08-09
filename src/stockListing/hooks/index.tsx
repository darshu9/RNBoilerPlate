/* eslint-disable no-catch-shadow */
import {useState, useEffect} from 'react';
import {API_ENDPOINT} from '../constants';

function useFetchData() {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  async function fetchData() {
    try {
      const response = await fetch(API_ENDPOINT);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const jsonData = await response.json();
      setResult(jsonData);
    } catch (e) {
      setError(e);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);
  const retry = () => {
    setLoading(true);
    setError(null);
    fetchData();
  };
  return {result, loading, error, retry};
}
export {useFetchData};
