import { Column, Entity, OneToMany } from 'typeorm';

import { BaseModel } from './base.model';

import { TABLE_NAMES } from './constants';
import { BookModel } from './book.model';

@Entity({ name: TABLE_NAMES.AUTHORS })
export class AuthorModel extends BaseModel {
  @Column({ type: 'varchar', length: 1024, nullable: false, unique: true })
  fullname: string;

  @Column({ type: 'varchar', length: 128, nullable: false })
  gender: string;

  @Column({ type: 'date', nullable: true })
  birthday?: Date;

  @OneToMany(() => BookModel, (books) => books.author)
  books: BookModel[];
}
