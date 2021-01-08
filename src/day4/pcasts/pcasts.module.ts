import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PcastEntity } from '../entities/pcast.entity';
import { PcastResolver } from './pcasts.resolver';
import { PcastService } from './pcasts.service';

@Module({
  imports: [TypeOrmModule.forFeature([PcastEntity])],
  providers: [PcastResolver, PcastService],
})
export class PcastModule {}
