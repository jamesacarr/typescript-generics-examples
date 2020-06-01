import axios from 'axios';

interface Response<T> {
  body: T;
  statusCode: number;
}

const fetchWrapper = async <T = any>(url: string): Promise<Response<T>> => {
  const response = await axios.get<T>(url);

  return {
    body: response.data,
    statusCode: response.status,
  };
};

export default fetchWrapper;
