import { getBanKList } from 'redux/slice/utilitiesSlice';
import CurrenxiApi from '../../services/data.instance.api';

const getData = () => {
  return new Promise((resolve, reject) => {
    CurrenxiApi.get('banks')
      .then(response => {
        resolve(response);
      })
      .catch(error => {
        reject(error);
      });
  });
};

export const getBankName = () => {
  return async dispatch => {
    const fetchData = async () => {
      const response = await getData();
      return response;
    };

    try {
      const res = await fetchData();
      dispatch(getBanKList({ data: res.data.data }));
    } catch (error) {}
  };
};
