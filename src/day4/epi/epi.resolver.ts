import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { CreateEpiDto } from '../dtos/create-epi.dto';
import { EpiEntity } from '../entities/epi.entity';
import { EpiService } from './epi.service';

@Resolver((of) => EpiEntity)
export class EpiResolver {
  constructor(private readonly epiService: EpiService) {}

  @Mutation((returns) => EpiEntity)
  createEpisode(
    @Args('id') pcastId: number,
    @Args('input') createEpiDto: CreateEpiDto,
  ) {
    // return this.epiService.createEpisode(pcastId, createEpiDto);
  }

  @Query((returns) => [EpiEntity])
  getAllEpisodes() {}

  @Query((returns) => EpiEntity)
  getEpisode() {}

  @Mutation((returns) => EpiEntity)
  deleteEpisode() {}

  @Mutation((returns) => EpiEntity)
  updateEpisode() {}
}
