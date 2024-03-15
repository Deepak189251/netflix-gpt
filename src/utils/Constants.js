export const Netflix_Logo = "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"

export const Background_Img = "https://assets.nflxext.com/ffe/siteui/vlv3/c38a2d52-138e-48a3-ab68-36787ece46b3/eeb03fc9-99c6-438e-824d-32917ce55783/IN-en-20240101-popsignuptwoweeks-perspective_alpha_website_large.jpg"

export const nowMovieUrl = 'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1';

export const topRatedMovieUrl = 'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1'

export const popularMovieUrl = 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1'

export const upcomingMovieUrl = 'https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1'

export const searchMovieUrl = 'https://api.themoviedb.org/3/search/movie?query=Raaz&include_adult=false&language=en-US&page=1' 


export const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer ' + process.env.REACT_APP_TMDB_KEY
    }
  };

export const SupportedLanguage = [
  {
    identifier: "english",
    name: "English"
  },
  {
    identifier: "hindi",
    name: "हिंदी"
  }
  
]

export const OpenAi_Key = process.env.REACT_APP_OPENAI_KEY