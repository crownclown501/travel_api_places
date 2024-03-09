import axios from "axios";

const URL= 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary'

const options = {
    params: {
      bl_latitude: '23.634501',
      tr_latitude: '23.874501',
      bl_longitude: '-102.552784',
      tr_longitude: '-100.552784',
    },
    headers: {
      'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
      'x-rapidapi-key': '2b9362a84emshc09551d66458db7p161ee0jsn06f7021fb6d8'
    }
  };

export const getPlacesData = async () => {
    try{
       const {data: {data}} = await axios.get(URL, options);
        return data;
    }catch(error){
        console.log(error);
    }
}