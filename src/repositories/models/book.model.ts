import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';

import { TABLE_NAMES } from './constants';

import { BaseModel } from './base.model';
import { AuthorModel } from './author.model';

@Entity({ name: TABLE_NAMES.BOOKS })
export class BookModel extends BaseModel {
  @Column({ type: 'varchar', length: 1024, nullable: false })
  title: string;

  @Column({ type: 'varchar', length: 512, nullable: false })
  genre: string;

  @Column({ type: 'int', nullable: false })
  pages: number;

  @ManyToOne(() => AuthorModel, { nullable: false })
  @JoinColumn({ name: 'author_id' })
  author: AuthorModel;

  @Column({ type: 'int', nullable: false })
  authorId: number;
}
