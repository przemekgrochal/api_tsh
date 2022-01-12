import {
  ArrayMinSize,
  IsArray,
  IsInt,
  IsNotEmpty,
  IsString,
  MaxLength,
} from 'class-validator';
import { IsMatchesArray } from '../../utilities/index';
import * as mockDbMovies from '../../db_mock/db.json';

export class CreateMovieDto {
  // [id] uuid auto generate
  id: number | string;

  // [genres]
  @IsArray()
  @IsString({ each: true })
  @ArrayMinSize(1)
  @IsMatchesArray({
    message: `[genres] genres not matched The available predefined genres are: ${mockDbMovies.genres}`,
  })
  genres: string[];

  // [title]
  @MaxLength(255, {
    message: '[title] field can be up to 255 characters long',
  })
  @IsNotEmpty({ message: '[title] field is required ' })
  title: string;

  // [year]
  @IsInt({ message: '[year] field must be of type number' })
  @IsNotEmpty({ message: '[year] field is required ' })
  year: number;

  // [runtime]
  @IsInt({ message: '[runtime] field must be of type number' })
  @IsNotEmpty({ message: '[runtime] field is required ' })
  runtime: number;

  // [director]
  @MaxLength(255, {
    message: '[director] field can be up to 255 characters long',
  })
  @IsNotEmpty({ message: '[director] field is required ' })
  director: string;

  // [actors]
  @IsString({
    message: '[actors] field is optional but must be a string if it exists',
  })
  actors: string;

  // [plot]
  @IsString({
    message: '[plot] field is optional but must be a string if it exists',
  })
  plot: string;

  // [posterUrl]
  @IsString({
    message: '[posterUrl] field is optional but must be a string if it exists',
  })
  posterUrl: string;
}
