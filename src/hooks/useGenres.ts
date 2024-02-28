import useData from "./useData";
import genres from "../data/genres";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

export const useGenres = () => useData<Genre>("/genres");

export const staticGenres = () => ({
  data: genres,
  loading: false,
  error: null,
});

export default { staticGenres, useGenres };
