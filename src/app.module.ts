import { Module } from '@nestjs/common';
import { CoreModule } from './core/core.module';
import { BooksModule } from './books/books.module';

@Module({
  imports: [CoreModule, BooksModule],
})
export class AppModule {}
