import axios from "axios";

const base_Url="https://api.themoviedb.org/3";

const TMDB_TOKEN="eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYWViZmMxYjI1YmNhZjJmMGQwZDRiMzQwZmRhYzgzZCIsInN1YiI6IjY0ZGI1YjFhYjc3ZDRiMTE0MjVkZDdmMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.a_UgaOMQrIOO4X5QLdSv6D0c6Ivvi2WI4EkyWz0VCSY";

const headers={
    Authorization:"bearer "+TMDB_TOKEN,
}

export const fetchDataFromApi=async (url,params)=>{
    try{
    const {data}=await axios.get(base_Url + url,{
        headers,
        params
    })
return data;}
catch(err)
{
    console.log(err);
    return err;
}
}