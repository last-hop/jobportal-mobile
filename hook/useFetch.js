import { useState, useEffect } from "react";
import axios from "axios";

import { KEY } from "@env"

const apikey = KEY



const useFetch = (endpoint, query) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);



  const options = {
    method: 'GET',
    url: `https://jsearch.p.rapidapi.com/${endpoint}`,
    headers: {
      'X-RapidAPI-Key': apikey,
      // 'X-RapidAPI-Key': '30fb86f01bmshfd1bf4d0f769e81p14d56fjsn7bd56be018d8',
        'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
    },
    params: { ...query  },
  };

  const fetchData = async () => {
    setIsLoading(true);

    try {
      const response = await axios.request(options);

      setData(response.data.data);
      setIsLoading(false);
    } catch (error) {
      setError(error);
      alert('there is a error')
      console.log(error)
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const refetch = () => {
    setIsLoading(true);
    fetchData();
  };

  return { data, isLoading, error, refetch };
};

export default useFetch;