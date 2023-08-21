import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { BookModel } from '../models/book.model';
import { AuthorModel } from '../models/author.model';

import { BooksRepositoryService } from './books-repository.service';

import { CreateBooksUseCase } from './use-cases/create-books.usecase';
import { GetBooksListUseCase } from './use-cases/get-books-list.usecase';
import { CreateAuthorUseCase } from './use-cases/create-author.usecase';

@Module({
  imports: [TypeOrmModule.forFeature([BookModel, AuthorModel])],
  providers: [BooksRepositoryService, CreateBooksUseCase, GetBooksListUseCase, CreateAuthorUseCase],
  exports: [BooksRepositoryService],
})
export class BooksRepositoryModule {}
