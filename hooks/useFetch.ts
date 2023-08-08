import { useState, useEffect } from "react";
import axios from "axios";

//API Key
const rapidApiKey = process.env.REACT_APP_RAPID_API_KEY

const useFetch = (endpoint : string, query : object) => {

    // Data 
  const [data, setData] = useState<[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

//   Request options 
  const options : object = {
    method: "GET",
    url: `https://jsearch.p.rapidapi.com/${endpoint}`,
    headers: {
      "X-RapidAPI-Key": rapidApiKey,
      "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
    },
    params: { ...query },
  };


// Fetch data from the server
  const fetchData = async () => {
    setIsLoading(true);

    try {
      const response = await axios.request(options);
      setData(response.data.data);
      setIsLoading(false);
    } catch (error : any) {
      setError("Something went wrong when fetching data");
    //   console.log(error)
    } finally {
      setIsLoading(false);
    }
  };

//   Use effect 
  useEffect(() => {
    fetchData();
  }, []);


//   Refresh data 
  const refetch = () => {
    setIsLoading(true);
    fetchData();
  };

  return { data, isLoading, error, refetch };
};

export default useFetch;