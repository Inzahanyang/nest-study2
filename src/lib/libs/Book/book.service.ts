import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateBookDto } from 'src/lib/dtos/create-book.dto';
import { BookEntity } from 'src/lib/entities/book.entity';
import { GenreEntity } from 'src/lib/entities/genre.entity';
import { UserEntity } from 'src/lib/entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class BookService {
  constructor(
    @InjectRepository(BookEntity)
    private readonly users: Repository<BookEntity>,
  ) {}

  async createBook(createBookDto: CreateBookDto): Promise<BookEntity> {
    const { name, userID, genreIDs } = createBookDto;
    const book = new BookEntity();
    book.name = name;
    book.user = await UserEntity.findOne(userID);
    book.genres = [];
    for (let i = 0; i < genreIDs.length; i++) {
      const genre = await GenreEntity.findOne(genreIDs[i]);
      book.genres.push(genre);
    }
    await book.save();
    return book;
  }
}
