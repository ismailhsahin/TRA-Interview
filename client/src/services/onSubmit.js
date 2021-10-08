import axios from 'axios';

const onSubmit = async (email, password) => {
  try {
    const res = await axios.post('https://localhost:44390/api/name/authenticate', {
      Email: email,
      Password: password,
    });
    return res;
  } catch (error) {
    return null;
  }
};

export default onSubmit;
