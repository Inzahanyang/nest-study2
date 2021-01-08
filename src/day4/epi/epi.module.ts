import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EpiEntity } from '../entities/epi.entity';
import { EpiResolver } from './epi.resolver';
import { EpiService } from './epi.service';

@Module({
  imports: [TypeOrmModule.forFeature([EpiEntity])],
  providers: [EpiResolver, EpiService],
})
export class EpiModule {}
