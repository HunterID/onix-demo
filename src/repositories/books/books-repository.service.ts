import { Injectable } from '@nestjs/common';
import { EntityManager } from 'typeorm';

import { QueryPaginationDto } from '../../books/dto/request/query-pagination.dto';
import { BookModel } from '../models/book.model';
import { CreateBooksUseCase } from './use-cases/create-books.usecase';
import { GetBooksListUseCase } from './use-cases/get-books-list.usecase';
import { CreateAuthorUseCase } from './use-cases/create-author.usecase';
import { CreateAuthorDto } from '../../books/dto/request/create-books.dto';
import { BookToSaveTransform } from './transformation/books-save.transform';
import { AuthorModel } from '../models/author.model';

@Injectable()
export class BooksRepositoryService {
  constructor(
    private readonly createBooksUseCase: CreateBooksUseCase,
    private readonly getBooksListUseCase: GetBooksListUseCase,
    private readonly createAuthorUseCase: CreateAuthorUseCase,
  ) {}

  public async createBooks(books: BookToSaveTransform[], transactionalManager?: EntityManager): Promise<void> {
    await this.createBooksUseCase.exec(books, transactionalManager);
  }

  public async getBooksList(
    query: QueryPaginationDto,
    transactionalManager?: EntityManager,
  ): Promise<{ count: number; data: BookModel[] }> {
    return this.getBooksListUseCase.exec(query, transactionalManager);
  }

  public async createAuthors(dto: CreateAuthorDto[], transactionalManager?: EntityManager): Promise<AuthorModel[]> {
    return this.createAuthorUseCase.exec(dto, transactionalManager);
  }
}
