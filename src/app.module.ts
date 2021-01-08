import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PcastEntity } from './day4/entities/pcast.entity';
import { EpiEntity } from './day4/entities/epi.entity';
import { PcastModule } from './day4/pcasts/pcasts.module';
import { EpiModule } from './day4/epi/epi.module';

@Module({
  imports: [
    GraphQLModule.forRoot({ autoSchemaFile: true }),
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db.sqlite',
      logging: true,
      synchronize: true,
      entities: [PcastEntity, EpiEntity],
      // entities: [UserEntity, BookEntity, GenreEntity,Podcast, Episode],
    }),
    PcastModule,
    EpiModule,
    // PodcastsModule,CommonModule, UserModule,GenreModule,BookModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
