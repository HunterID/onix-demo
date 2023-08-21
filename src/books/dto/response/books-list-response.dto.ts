import { Exclude, Expose, Transform, Type, plainToInstance } from 'class-transformer';

@Exclude()
export class AuthorResponseDto {
  @Expose()
  fullname: string;

  @Expose()
  gender: string;

  @Expose()
  birthday: Date;
}

@Exclude()
export class BookResponseDto {
  @Expose()
  id: number;

  @Expose()
  title: string;

  @Expose()
  genre: string;

  @Expose()
  pages: number;

  @Expose()
  @Transform(({ obj }) => plainToInstance(AuthorResponseDto, obj.author))
  author: AuthorResponseDto;
}

@Exclude()
export class BooksListResponseDto {
  @Expose()
  @Type(() => BookResponseDto)
  data: BookResponseDto[];

  @Expose()
  count: number;
}
