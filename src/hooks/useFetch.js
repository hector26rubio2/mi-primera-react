import { useState, useEffect } from 'react';

export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error al realizar la solicitud:', error);
        setLoading(false);
      });
  };
  useEffect(() => {
    fetchData();
  }, [url]);

  return { data, loading };
};
