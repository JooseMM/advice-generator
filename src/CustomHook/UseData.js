import { useEffect, useState } from "react";

const useData = () => {
    const [data, setData] = useState({});

    
    const fetchFunction = async () => {
        try {
          const response = await fetch ("https://api.adviceslip.com/advice");
          const jsonData = await response.json();
          setData({id: jsonData.slip.id, advice: jsonData.slip.advice})
        }
         catch (err) {
          console.log(err)
         }
      };

    useEffect(() => {
        fetchFunction()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    
    return {fetchFunction, data};
}

export default useData;