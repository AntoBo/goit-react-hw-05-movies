import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const useData = (fetchMethod, initialValues = null) => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(initialValues);
  const { movieId } = useParams();

  useEffect(() => {
    if (data !== initialValues) {
      return;
    }
    setIsLoading(true);
    fetchMethod(movieId)
      .then(data => {
        setData(data);
      })
      .catch(err => {
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [data]);

  return [data, isLoading];
};
