export const TMDB_CONFIG = {
  BASE_URL: 'https://api.themoviedb.org/3',
  API_KEY: process.env.EXPO_PUBLIC_MOVIE_API_KEY,
  headers:{
    accept: 'application/json',
    Authorization: `Bearer ${process.env.EXPO_PUBLIC_MOVIE_API_KEY}`,}
}
export const fetchMovies = async ({query}:{query:string}) => {
    if (!TMDB_CONFIG.API_KEY) {
        throw new Error('Missing TMDB API key. Set EXPO_PUBLIC_MOVIE_API_KEY in your environment.');
    }

    const endpoint = query
      ? `${TMDB_CONFIG.BASE_URL}/search/movie?query=${encodeURIComponent(query)}`
      : `${TMDB_CONFIG.BASE_URL}/discover/movie?sort_by=popularity.desc`;
    
    
    const response =await fetch(endpoint,{
        method:'GET',
        headers: TMDB_CONFIG.headers,
    });
    if(!response.ok){
        throw new Error(`Failed to fetch movies: ${response.statusText}`);
    }
    const data = await response.json();
    return data.results;

}


//const url = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc';
//const options = {
//  method: 'GET',
//  headers: {
//    accept: 'application/json',
//    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MWE5OTY3NmQ5ZDc3YmY2YTg5NThhMzkxYzJiYTc2YyIsIm5iZiI6MTc2MDc3NjUyNC44NzM5OTk4LCJzdWIiOiI2OGYzNTE0YzM2MzY0MDllMjZjNmZjMzMiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.hUDMEk03-h-wIYGgw1pyIyFkZ80E-95_-ykMv2mRL4I'
//  }
//};
//
//fetch(url, options)
//  .then(res => res.json())
//  .then(json => console.log(json))
//  .catch(err => console.error(err));