import { Injectable } from '@nestjs/common';
import { EntityManager } from 'typeorm';

import { BookModel } from '../../models/book.model';

import { BookToSaveTransform } from '../transformation/books-save.transform';

@Injectable()
export class CreateBooksUseCase {
  constructor(private readonly globalEntityManager: EntityManager) {}

  public async exec(books: BookToSaveTransform[], transactionalManager?: EntityManager): Promise<void> {
    const manager = transactionalManager ?? this.globalEntityManager;

    await manager.getRepository(BookModel).save(books);
  }
}
