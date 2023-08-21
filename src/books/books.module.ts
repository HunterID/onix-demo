import { Module } from '@nestjs/common';

import { BooksService } from './books.service';
import { BooksController } from './books.controller';

import { BooksRepositoryModule } from '../repositories/books/books-repository.module';

@Module({
  imports: [BooksRepositoryModule],
  controllers: [BooksController],
  providers: [BooksService],
  exports: [BooksService],
})
export class BooksModule {}
