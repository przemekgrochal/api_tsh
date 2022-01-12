## This project was created based on:

- NodeJS v16.13.1
- Npm v8.1.2


## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Testing API
- GET http://localhost:3000/movies RETURN ALL MOVIES
- GET http://localhost:3000/movies/{id} RETURN MOVIE BY ID

- POST http://localhost:3000/movies/create CREATE MOVIE AND RETURN NEW MOVIE WITCH ARRAY OF MOVIES
{
    "genres": [
      "Comedy",
      "Western",
      "Horror",
      "Musical",
      "Sport"
  ],
   "title":"Beetlejuice",
   "year":1988,
   "runtime":92,
   "director":"Tim Burton",
   "actors":"Alec Baldwin, Geena Davis, Annie McEnroe, Maurice Page",
   "plot":"A couple of recently deceased ghosts contract the services of a \"bio-exorcist\" in order to remove the obnoxious new owners of their house.",
   "posterUrl":"https://images-na.ssl-images-amazon.com/images/M/MV5BMTUwODE3MDE0MV5BMl5BanBnXkFtZTgwNTk1MjI4MzE@._V1_SX300.jpg"
}
