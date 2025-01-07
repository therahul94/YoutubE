import axios from "axios";

const BASE_URL = "https://youtube138.p.rapidapi.com";
const options = {
  headers: {
    'x-rapidapi-key': import.meta.env.VITE_YT_API_KEY,
    'x-rapidapi-host': 'youtube138.p.rapidapi.com'
  }
};
export const fetchData = async(url)=>{
    try {
        const response = await axios.get(`${BASE_URL}/${url}`, options);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}


