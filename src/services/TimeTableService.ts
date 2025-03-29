import axios from "axios";

export const getTimeTable = async () => {
  return await axios.get('https://c-locker.vercel.app/api')
    .then((res) => {
      return (res.data);
    })
    .catch((err => {
      throw err
    }))
}