import axios from "axios";

export const getTimeTable = async () => {
  return await axios.get('http://localhost:3000/api')
    .then((res) => {
      return (res.data);
    })
    .catch((err => {
      throw err
    }))
}