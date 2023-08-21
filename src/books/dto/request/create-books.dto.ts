import {
  IsDateString,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
  MaxLength,
  MinLength,
  ValidateNested,
} from 'class-validator';

import { Transform, Type } from 'class-transformer';
import {
  BOOKS_VALIDATION_MESSAGES,
  FULLNAME_MAX_LENGTH,
  FULLNAME_MIN_LENGTH,
  GENDER_MAX_LENGTH,
  GENDER_MIN_LENGTH,
  GENRE_MAX_LENGTH,
  GENRE_MIN_LENGTH,
  TITLE_MAX_LENGTH,
  TITLE_MIN_LENGTH,
} from '../../books.constants';
import { trimString } from '../../../common/helpers/helpers';

export class CreateAuthorDto {
  @IsString({ message: BOOKS_VALIDATION_MESSAGES.FULLNAME_VALID })
  @IsNotEmpty({ message: BOOKS_VALIDATION_MESSAGES.FULLNAME_EMPTY })
  @MinLength(FULLNAME_MIN_LENGTH, { message: BOOKS_VALIDATION_MESSAGES.FULLNAME_MIN_LENGTH })
  @MaxLength(FULLNAME_MAX_LENGTH, { message: BOOKS_VALIDATION_MESSAGES.FULLNAME_MAX_LENGTH })
  @Transform(trimString)
  fullname: string;

  @IsString({ message: BOOKS_VALIDATION_MESSAGES.FULLNAME_VALID })
  @IsNotEmpty({ message: BOOKS_VALIDATION_MESSAGES.GENDER_EMPTY })
  @MinLength(GENDER_MIN_LENGTH, { message: BOOKS_VALIDATION_MESSAGES.FULLNAME_MIN_LENGTH })
  @MaxLength(GENDER_MAX_LENGTH, { message: BOOKS_VALIDATION_MESSAGES.FULLNAME_MAX_LENGTH })
  @Transform(trimString)
  gender: string;

  @IsOptional()
  @IsDateString(undefined, { message: BOOKS_VALIDATION_MESSAGES.BIRTHDAY_VALID })
  birthday?: string;
}

export class CreateBookDto {
  @IsString({ message: BOOKS_VALIDATION_MESSAGES.FULLNAME_VALID })
  @IsNotEmpty({ message: BOOKS_VALIDATION_MESSAGES.TITLE_EMPTY })
  @MinLength(TITLE_MIN_LENGTH, { message: BOOKS_VALIDATION_MESSAGES.FULLNAME_MIN_LENGTH })
  @MaxLength(TITLE_MAX_LENGTH, { message: BOOKS_VALIDATION_MESSAGES.FULLNAME_MAX_LENGTH })
  @Transform(trimString)
  title: string;

  @IsString({ message: BOOKS_VALIDATION_MESSAGES.FULLNAME_VALID })
  @IsNotEmpty({ message: BOOKS_VALIDATION_MESSAGES.GENRE_EMPTY })
  @MinLength(GENRE_MIN_LENGTH, { message: BOOKS_VALIDATION_MESSAGES.FULLNAME_MIN_LENGTH })
  @MaxLength(GENRE_MAX_LENGTH, { message: BOOKS_VALIDATION_MESSAGES.FULLNAME_MAX_LENGTH })
  @Transform(trimString)
  genre: string;

  @IsNumber(undefined, { message: BOOKS_VALIDATION_MESSAGES.PAGES_NUMBER })
  @IsPositive({ message: BOOKS_VALIDATION_MESSAGES.PAGES_MIN })
  pages: number;

  @ValidateNested()
  @Type(() => CreateAuthorDto)
  author: CreateAuthorDto;
}
