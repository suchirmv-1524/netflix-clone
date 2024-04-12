//importing the API managing module
import axios from "axios";

// base url to make requests to the movie database
const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
});


//instance.get('/hello');
//https://api.themoviedb.org/3/hello

//exporting the instance
export default instance;
