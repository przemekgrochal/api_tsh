import {
  registerDecorator,
  ValidationOptions,
  ValidationArguments,
} from 'class-validator';
import * as mockDbMovies from '../db_mock/db.json';

export function IsMatchesArray(validationOptions?: ValidationOptions) {
  return (object: any, propertyName: string) => {
    registerDecorator({
      name: 'IsNonPrimitiveArray',
      target: object.constructor,
      propertyName,
      constraints: [],
      options: validationOptions,
      validator: {
        validate(value: any, args: ValidationArguments) {
          let flag = false;
          mockDbMovies.genres.map((itemGenres) => {
            value.map((currentGenres) => {
              if (currentGenres === itemGenres) {
                flag = true;
              }
            });
          });
          return flag;
        },
      },
    });
  };
}
