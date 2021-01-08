import { ParseIntPipe } from '@nestjs/common';
import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { CreatePcastDto } from '../dtos/create-pcast.dto';
import { UpdatePcastDto } from '../dtos/update-pcast.dto';
import { EpiEntity } from '../entities/epi.entity';
import { PcastEntity } from '../entities/pcast.entity';
import { PcastService } from './pcasts.service';

@Resolver((Of) => PcastEntity)
export class PcastResolver {
  constructor(private readonly pcastService: PcastService) {}
  @Mutation((returns) => PcastEntity)
  createPcast(
    @Args('input') createPcastDto: CreatePcastDto,
  ): Promise<PcastEntity> {
    return this.pcastService.createPcast(createPcastDto);
  }

  @Query((returns) => [PcastEntity])
  getAllPcasts(): Promise<PcastEntity[]> {
    return this.pcastService.getAllPcasts();
  }

  @Query((returns) => PcastEntity)
  getPcast(@Args('id') id: number): Promise<PcastEntity> {
    return this.pcastService.getPcast(id);
  }

  @Mutation((returns) => Boolean)
  async deletePcast(@Args('id') id: number): Promise<boolean> {
    try {
      this.pcastService.deletePcast(id);
      return true;
    } catch (e) {
      console.log(e);
      return false;
    }
  }

  @Mutation((returns) => PcastEntity)
  updatePcast(@Args('input') updatePcastDto: UpdatePcastDto) {
    return this.pcastService.updatePcast(updatePcastDto);
  }

  @Query((returns) => PcastEntity)
  getepisOfPcast(@Args('pcastId', ParseIntPipe) pcastId: number) {
    return this.pcastService.getepisOfPcast(pcastId);
  }
}
