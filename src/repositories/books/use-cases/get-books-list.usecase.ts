import { Injectable } from '@nestjs/common';
import { EntityManager } from 'typeorm';

import { TABLE_NAMES } from '../../models/constants';
import { BookModel } from '../../models/book.model';
import { QueryPaginationDto } from '../../../books/dto/request/query-pagination.dto';

@Injectable()
export class GetBooksListUseCase {
  constructor(private readonly globalEntityManager: EntityManager) {}
  public async exec(
    query: QueryPaginationDto,
    transactionalManager?: EntityManager,
  ): Promise<{ count: number; data: BookModel[] }> {
    const manager = transactionalManager ?? this.globalEntityManager;

    const queryBuilder = manager.getRepository(BookModel).createQueryBuilder(TABLE_NAMES.BOOKS);

    const [data, count] = await queryBuilder
      .leftJoinAndSelect('books.author', 'author')
      .skip(query.skip)
      .take(query.limit)
      .getManyAndCount();

    return { data, count };
  }
}
