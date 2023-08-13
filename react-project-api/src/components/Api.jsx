import axios from "axios";

const searchImages = async (term) => {
    const response = await axios.get("https://api.unsplash.com/search/photos", {
        headers: {
            Authorization: "Client-ID HoQ3aMFa-kBb_mIBCUBO7YAab44ODaSFA4ZI6NHSY-g"
        },
        params: {
            query: term
        }
    });
    return response.data.results;
};

export default searchImages;