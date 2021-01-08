import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateGenreDto } from 'src/lib/dtos/create-genre.dto';
import { GenreEntity } from 'src/lib/entities/genre.entity';
import { GenreService } from './genre.service';

@Resolver((Of) => GenreEntity)
export class GenreResolver {
  constructor(private readonly genreService: GenreService) {}
  @Query((returns) => [GenreEntity])
  getAllGenres(): Promise<GenreEntity[]> {
    return this.genreService.getAllGenres();
  }

  @Mutation((returns) => GenreEntity)
  createGenre(
    @Args('input') createGenreDto: CreateGenreDto,
  ): Promise<GenreEntity> {
    return this.genreService.createGenre(createGenreDto);
  }
}
