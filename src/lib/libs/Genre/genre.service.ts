import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateGenreDto } from 'src/lib/dtos/create-genre.dto';
import { GenreEntity } from 'src/lib/entities/genre.entity';
import { Repository } from 'typeorm';

@Injectable()
export class GenreService {
  constructor(
    @InjectRepository(GenreEntity)
    private readonly genre: Repository<GenreEntity>,
  ) {}

  async getAllGenres(): Promise<GenreEntity[]> {
    return await this.genre.find();
  }

  async createGenre(createGenreDto: CreateGenreDto): Promise<GenreEntity> {
    const newGenre = this.genre.create();
    const { type } = createGenreDto;
    newGenre.type = type;
    await this.genre.save(newGenre);
    return newGenre;
  }
}
