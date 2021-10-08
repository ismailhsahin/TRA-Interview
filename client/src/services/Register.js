import axios from 'axios';

const Register = async (email, password) => {
  try {
    const res = await axios.post('https://localhost:44390/api/name/add', {
      Email: email,
      Password: password,
    });
    return res;
  } catch (error) {
    return null;
  }
};

export default Register;
