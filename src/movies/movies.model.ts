export class MoviesModel {
  id: number | string;
  title: string;
  year: string | number;
  runtime: number | string;
  genres: string[];
  director: string;
  actors: string;
  plot: string;
  posterUrl: string;
}
