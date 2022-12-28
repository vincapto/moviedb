import { IMovie } from './model';
import { genres } from './data';

interface IMovieResponse {
  results: IMovie[];
  page: number;
}
export interface IGenre {
  id: number;
  name: string;
}

export const apiKey = 'dfdfe4fddb4173dfb64004a3dd5e6ea7';

export const getUrl = (discover = true, search = '', sort = 'popularity.desc', page = '1') => {
  const query = search ? `&query=${search.trim().replaceAll(' ', '%20')}` : '';
  const sortBy = sort ? `&sort_by=${sort}` : '';
  const currentPage = page ? `&page=${page}` : '';
  const request = discover ? 'discover' : 'search';
  const requestUrl = `https://api.themoviedb.org/3/${request}/movie?api_key=${apiKey}${query}${sortBy}${currentPage}`;
  console.log('URL SEND', requestUrl);
  return requestUrl;
};

export const fetchGenreList = async () => {
  const response = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}`);
  const genreList = await response.json();
  const result = genreList.genres.reduce((acc: Record<number, string>, next: IGenre) => {
    return { ...acc, [next.id]: next.name };
  }, {});
  return result;
};

export const fetchMovie = async (id: number) => {
  
  const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`);
  const movie = await response.json();
  return movie;
};

export const getGenres = async (id: number) => {
  const response = await fetchMovie(id).then((movie: { genres: IGenre[] }) => {
    return movie.genres.map((genre: IGenre) => {
      console.log('genre id: ' + genre.id + ', genre name: ' + genre.name);
      return genre.name;
    });
  });
  return response;
};

export async function getData(url: string) {
  try {
    const data = await fetch(url);
    console.log(data);
    const result = await data.json();
    console.log(result.results);
    return result;
  } catch (error) {
    console.log('somethig wrong');
  }
}
