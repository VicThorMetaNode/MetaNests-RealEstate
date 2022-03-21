import axios from "axios"

//baseUrl won't be use here but in all other files
export const baseUrl = "https://bayut.p.rapidapi.com"


//fetching from api 
export const fetchApi = async (url) => {
    const { data } = await axios.get((url), {
        headers: {
            'x-rapidapi-host': 'bayut.p.rapidapi.com',
            'x-rapidapi-key': '49848b005amshe8bca68c28066e4p15202fjsn8daf06491b00'
          }
    });
    return data;
}