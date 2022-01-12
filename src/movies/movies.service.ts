import { writeFileSync } from 'fs';
import { join } from 'path';
import { v4 as uuidv4 } from 'uuid';
import { Injectable } from '@nestjs/common';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import * as mockDbMovies from '../db_mock/db.json';
import { MoviesModel } from './movies.model';

@Injectable()
export class MoviesService {
  create(createMovieDto: CreateMovieDto) {
    createMovieDto.id = uuidv4();

    const movies: MoviesModel[] = mockDbMovies.movies;
    const genres: string[] = mockDbMovies.genres;

    movies.push(createMovieDto);

    const jsonString = JSON.stringify({
      genres,
      movies,
    });

    try {
      writeFileSync(join(__dirname, '..', '/db_mock/db.json'), jsonString);
    } catch (err) {
      console.error(err);
    }

    return {
      created_movie: createMovieDto,
      movies: mockDbMovies.movies,
    };
  }

  findAll(query) {
    const arrayMovies = [];

    if (query.duration) {
      mockDbMovies.movies.map((item) => {
        if (Number(item.runtime) === Number(query.duration)) {
          arrayMovies.push(item);
        }
      });

      return arrayMovies;
    }

    if (query.genres) {
      // eslint-disable-next-line prettier/prettier
      const queryValue = query.genres.charAt(0).toUpperCase() + query.genres.slice(1)

      mockDbMovies.movies.map((moviesItem) => {
        moviesItem.genres.map((moviesItemGenres) => {
          if (moviesItemGenres === queryValue) {
            arrayMovies.push(moviesItem);
          }
        });
      });

      return arrayMovies;
    }

    return mockDbMovies.movies;
  }

  findOne(id: number | string) {
    let movie;

    mockDbMovies.movies.map((item) => {
      if (id == item.id) {
        movie = item;
      }
    });

    return movie;
  }

  update(id: number, updateMovieDto: UpdateMovieDto) {
    return `This action updates a #${id} movie`;
  }

  remove(id: number) {
    return `This action removes a #${id} movie`;
  }
}
