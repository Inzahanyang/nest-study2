import { Injectable } from '@nestjs/common';
import { Episode } from './entities/episode.entity';
import { Podcast } from './entities/podcast.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePodcastInput } from './dtos/create-podcast.dto';
import { UpdatePodcastDto } from './dtos/update-podcast.dto';

@Injectable()
export class PodcastsService {
  constructor(
    @InjectRepository(Podcast) private readonly podcasts: Repository<Podcast>,
  ) {}

  getAllPodcasts(): Promise<Podcast[]> {
    return this.podcasts.find();
  }

  getPodcast(id: number): Promise<Podcast> {
    const podcast = this.podcasts.findOne(id);
    return podcast;
  }

  createPodcast({ title, category, rating }: CreatePodcastInput) {
    this.podcasts.save(this.podcasts.create({ title, category, rating }));
  }

  deletePodcast(id: number) {
    this.podcasts.delete({ id });
  }

  updatePodcast({ id, data }: UpdatePodcastDto) {
    this.podcasts.update(id, { ...data });
  }
}

@Injectable()
export class EpisodesService {
  constructor(
    @InjectRepository(Episode) private readonly episodes: Repository<Episode>,
  ) {}
  getAllEpisodes() {}
  getEpisode() {}
  createEpisode() {}
  deleteEpisode() {}
  updateEpisode() {}
}
