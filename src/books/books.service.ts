import { Injectable } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';

import { QueryPaginationDto } from './dto/request/query-pagination.dto';
import { BooksRepositoryService } from '../repositories/books/books-repository.service';
import { BooksListResponseDto } from './dto/response/books-list-response.dto';
import { CreateBookDto } from './dto/request/create-books.dto';
import { TransactionService } from '../core/postgres/transaction.service';
import { BookToSaveTransform } from '../repositories/books/transformation/books-save.transform';

@Injectable()
export class BooksService {
  constructor(
    private booksRepositoryService: BooksRepositoryService,
    private transactionService: TransactionService,
  ) {}

  public async getBooks(query: QueryPaginationDto): Promise<BooksListResponseDto> {
    const books = await this.booksRepositoryService.getBooksList(query);

    return plainToInstance(BooksListResponseDto, books);
  }

  public async createBooks(dto: CreateBookDto[]): Promise<void> {
    await this.transactionService.exec(async (transactionalManager) => {
      const authors = dto.map((item) => item.author);

      const saveAuthors = await this.booksRepositoryService.createAuthors(authors, transactionalManager);

      const booksWithAuthorIds = dto.map((item) => {
        const savedAuthor = saveAuthors.find((author) => author.fullname === item.author.fullname);
        return savedAuthor ? { ...item, authorId: savedAuthor.id } : item;
      });

      await this.booksRepositoryService.createBooks(
        plainToInstance(BookToSaveTransform, booksWithAuthorIds),
        transactionalManager,
      );
    });
  }
}
