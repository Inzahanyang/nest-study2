import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateBookDto } from 'src/lib/dtos/create-book.dto';
import { BookEntity } from 'src/lib/entities/book.entity';
import { BookService } from './book.service';

@Resolver((Of) => BookEntity)
export class BookResolver {
  constructor(private readonly bookService: BookService) {}
  @Query((returns) => Boolean)
  f() {
    return true;
  }

  @Mutation((returns) => BookEntity)
  createBook(@Args('input') createBookDto: CreateBookDto): Promise<BookEntity> {
    return this.bookService.createBook(createBookDto);
  }
}
