import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class BookToSaveTransform {
  @Expose()
  title: string;

  @Expose()
  genre: string;

  @Expose()
  pages: number;

  @Expose()
  authorId: number;
}
