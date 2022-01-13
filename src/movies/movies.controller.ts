import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Req,
} from '@nestjs/common';
import { MoviesService } from './movies.service';
import * as createMovieDto from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';

@Controller()
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}

  @Get('/movies')
  findAll(@Req() request) {
    let queryRequest = null;

    if (request !== null) {
      const { query } = request;
      queryRequest = query;
    }

    return this.moviesService.findAll(queryRequest);
  }

  @Get('/movies/:id')
  findOne(@Param('id') id: string | number) {
    return this.moviesService.findOne(id);
  }

  @Post('movies/create')
  create(@Body() CreateMovieDto: createMovieDto.CreateMovieDto) {
    return this.moviesService.create(CreateMovieDto);
  }

  @Patch('/movies/:id')
  update(@Param('id') id: string, @Body() updateMovieDto: UpdateMovieDto) {
    return this.moviesService.update(+id, updateMovieDto);
  }

  @Delete('/movies/:id')
  remove(@Param('id') id: string) {
    return this.moviesService.remove(+id);
  }
}
