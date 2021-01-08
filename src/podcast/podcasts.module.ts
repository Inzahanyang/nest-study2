import { Module } from '@nestjs/common';
import { EpisodesService, PodcastsService } from './podcasts.service';
import { PodcastsResolver, EpisodeResolver } from './podcasts.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Podcast } from './entities/podcast.entity';
import { Episode } from './entities/episode.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Podcast, Episode])],
  providers: [
    PodcastsService,
    EpisodesService,
    PodcastsResolver,
    EpisodeResolver,
  ],
})
export class PodcastsModule {}