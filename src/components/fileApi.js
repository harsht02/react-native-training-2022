import axios from 'axios';
import react, {useEffect} from 'react';

export function getUserData() {
  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then(({response}) => {})
      .catch(error => console.error(error));
  }, []);
}
