import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiTags } from '@nestjs/swagger';

import { QueryPaginationDto } from './dto/request/query-pagination.dto';
import { BooksListResponseDto } from './dto/response/books-list-response.dto';
import { BooksService } from './books.service';
import { CreateBookDto } from './dto/request/create-books.dto';

@ApiTags('Books')
@Controller('api/books')
export class BooksController {
  constructor(private booksService: BooksService) {}

  @ApiOperation({ summary: 'Get books' })
  @Get()
  public async getBooks(@Query() query: QueryPaginationDto): Promise<BooksListResponseDto> {
    return this.booksService.getBooks(query);
  }

  @ApiOperation({ summary: 'Create books' })
  @ApiBody({ type: [CreateBookDto] })
  @Post()
  public async createBooks(@Body() books: CreateBookDto[]): Promise<void> {
    return this.booksService.createBooks(books);
  }
}
