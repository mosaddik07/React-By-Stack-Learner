import { useState, useEffect } from "react";

const useFetch = (url, cb) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  // setLoading(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    try {
      const res = await fetch(url);
      const result = await res.json();
      if (cb) {
        setData(cb(result));
      } else {
        setData(result);
      }
      setError("");
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  return { data, loading, error };
};
export default useFetch;
