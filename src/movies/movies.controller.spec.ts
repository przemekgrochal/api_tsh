import { Test, TestingModule } from '@nestjs/testing';
import { MoviesController } from './movies.controller';
import { MoviesService } from './movies.service';
import { MoviesModel } from './movies.model';
import * as createMovieDto from './dto/create-movie.dto';
import * as mockDbMovies from '../db_mock/db.json';

describe('MoviesController', () => {
  let controller: MoviesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MoviesController],
      providers: [MoviesService],
    }).compile();

    controller = module.get<MoviesController>(MoviesController);
  });

  it('GET should return movie by ID ', () => {
    // GET http://localhost:3000/movies/1
    expect(controller.findOne(1)).toStrictEqual({
      id: 1,
      title: 'Beetlejuice',
      year: '1988',
      runtime: '92',
      genres: ['Comedy', 'Fantasy'],
      director: 'Tim Burton',
      actors: 'Alec Baldwin, Geena Davis, Annie McEnroe, Maurice Page',
      plot: 'A couple of recently deceased ghosts contract the services of a "bio-exorcist" in order to remove the obnoxious new owners of their house.',
      posterUrl:
        'https://images-na.ssl-images-amazon.com/images/M/MV5BMTUwODE3MDE0MV5BMl5BanBnXkFtZTgwNTk1MjI4MzE@._V1_SX300.jpg',
    });
  });

  it('GET should return all movies ', () => {
    // GET http://localhost:3000/movies
    expect(controller.findAll(null)).toBe(mockDbMovies.movies);
  });

  it('GET should return all movies by PARAMS [duration || genres]', () => {
    // GET http://localhost:3000/movies?duration=130
    expect(controller.findAll({ duration: '130' })).toBe(mockDbMovies.movies);

    // GET http://localhost:3000/movies?genres=comedy
    expect(controller.findAll({ genres: 'comedy' })).toBe(mockDbMovies.movies);
  });

  it('POST CREATE MOVIE AND RETURN NEW MOVIE WITCH ARRAY OF MOVIES]', () => {
    // POST http://localhost:3000/movies/create
    const movies = {
      genres: ['Comedy', 'Western', 'Horror', 'Musical', 'Sport'],
      title: 'Beetlejuice',
      year: 1988,
      runtime: 92,
      director: 'Tim Burton',
      actors: 'Alec Baldwin, Geena Davis, Annie McEnroe, Maurice Page',
      plot: 'A couple of recently deceased ghosts contract the services of a "bio-exorcist" in order to remove the obnoxious new owners of their house.',
      posterUrl:
        'https://images-na.ssl-images-amazon.com/images/M/MV5BMTUwODE3MDE0MV5BMl5BanBnXkFtZTgwNTk1MjI4MzE@._V1_SX300.jpg',
      id: 999,
    };

    const response = {
      created_movie: movies,
      movies: mockDbMovies.movies,
    };

    expect(controller.create(movies)).toEqual(response);
  });
});
