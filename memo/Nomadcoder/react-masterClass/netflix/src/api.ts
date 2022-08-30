const API_KEY = "e7bb68f26ed74c593e3f280018ea2c4b";
const BASE_PATH = "https://api.themoviedb.org/3";

interface IMovie {
  id: number;
  backdrop_path: string;
  poster_path: string;
  title: string;
  overview: string;
}

interface ITv {
  id: number;
  backdrop_path: string;
  poster_path: string;
  name: string;
  overview: string;
}

interface ISearch {
  id: number;
  name: string;
  backdrop_path: string;
  poster_path: string;
  profile_path: string;
}
export interface IGetMoviesResult {
  datas: {
    minimum: string;
    maximum: string;
  };
  page: number;
  results: IMovie[];
  total_pages: number;
  total_results: number;
}

export interface IGetTvResult {
  datas: {
    minimum: string;
    maximum: string;
  };
  page: number;
  results: ITv[];
  total_pages: number;
  total_results: number;
}

export interface IGetSearchResult {
  page: number;
  results: ISearch[];
  total_pages: number;
  total_results: number;
}

export function getMovies() {
  return fetch(`${BASE_PATH}/movie/now_playing?api_key=${API_KEY}&page=1`).then((res) => res.json());
}

export function getPopularMovies() {
  return fetch(`${BASE_PATH}/movie/popular?api_key=${API_KEY}&page=1`).then((res) => res.json());
}

export function getTv() {
  return fetch(`${BASE_PATH}/tv/popular?api_key=${API_KEY}`).then((res) => res.json());
}

export function searchAnything(search: string) {
  return fetch(`${BASE_PATH}/search/multi?api_key=${API_KEY}&query=${search}&page=1`).then((res) => res.json());
}
