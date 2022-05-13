import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const useData = (fetchMethod, initialValues = null) => {
  const [data, setData] = useState(initialValues);
  const { movieId } = useParams();

  useEffect(() => {
    if (data !== initialValues) {
      return;
    }

    fetchMethod(movieId)
      .then(data => {
        setData(data);
      })
      .catch(err => console.log(err));
  }, [data]);

  return data;
};
