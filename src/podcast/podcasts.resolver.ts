import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { EpisodesService, PodcastsService } from './podcasts.service';
import { Podcast } from './entities/podcast.entity';
import { Episode } from './entities/episode.entity';
import {
  CreatePodcastInput,
  CreatePodcastOutput,
} from './dtos/create-podcast.dto';
import { UpdatePodcastDto } from './dtos/update-podcast.dto';

@Resolver((Of) => Podcast)
export class PodcastsResolver {
  constructor(private readonly podcastsService: PodcastsService) {}

  @Query((returns) => [Podcast])
  getAllPodcasts(): Promise<Podcast[]> {
    return this.podcastsService.getAllPodcasts();
  }

  @Query((returns) => Podcast)
  getPodcast(@Args('id') id: number): Promise<Podcast> {
    return this.podcastsService.getPodcast(id);
  }

  @Mutation((returns) => Boolean)
  async createPodcast(@Args('input') createPodcastInput: CreatePodcastInput) {
    try {
      this.podcastsService.createPodcast(createPodcastInput);
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  @Mutation((returns) => Boolean)
  async deletePodcast(@Args('id') id: number): Promise<boolean> {
    try {
      this.podcastsService.deletePodcast(id);
      return true;
    } catch (e) {
      console.log(e);
      return false;
    }
  }

  @Mutation((returns) => Boolean)
  async updatePodcast(@Args('input') updatePodcastDto: UpdatePodcastDto) {
    try {
      this.podcastsService.updatePodcast(updatePodcastDto);
      return true;
    } catch (e) {
      console.log(e);
      return false;
    }
  }
}

@Resolver((of) => Episode)
export class EpisodeResolver {
  constructor(private readonly episodesService: EpisodesService) {}
  @Query((returns) => Boolean)
  getAllEpisodes() {}
  @Query((returns) => Boolean)
  getEpisode() {}
  @Mutation((returns) => Boolean)
  createEpisode() {}
  @Mutation((returns) => Boolean)
  deleteEpisode() {}
  @Mutation((returns) => Boolean)
  updateEpisode() {}
}
