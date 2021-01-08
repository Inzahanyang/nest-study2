import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UpdatePodcastDto } from 'src/podcast/dtos/update-podcast.dto';
import { Repository } from 'typeorm';
import { CreatePcastDto } from '../dtos/create-pcast.dto';
import { EpiEntity } from '../entities/epi.entity';
import { PcastEntity } from '../entities/pcast.entity';

@Injectable()
export class PcastService {
  constructor(
    @InjectRepository(PcastEntity)
    private readonly pcasts: Repository<PcastEntity>,
  ) {}

  async createPcast({
    title,
    category,
    rating,
  }: CreatePcastDto): Promise<PcastEntity> {
    const newPcast = this.pcasts.create({
      title,
      category,
      rating,
    });
    await this.pcasts.save(newPcast);
    return newPcast;
  }

  async getAllPcasts(): Promise<PcastEntity[]> {
    return await this.pcasts.find();
  }

  async getPcast(id: number): Promise<PcastEntity> {
    return await this.pcasts.findOne(id);
  }

  async deletePcast(id: number): Promise<Boolean> {
    try {
      await this.pcasts.delete(id);
      return true;
    } catch (e) {
      console.log(e);
      return false;
    }
  }

  async updatePcast({ id, data }: UpdatePodcastDto): Promise<PcastEntity> {
    await this.pcasts.update(id, { ...data });
    const updated = await this.getPcast(id);
    return updated;
  }

  async getepisOfPcast(pcastId: number): Promise<EpiEntity[]> {
    const pcast: PcastEntity = await this.pcasts.findOne({
      where: { id: pcastId },
      relations: ['epis'],
    });
    console.log(pcast);
    return pcast.epis;
  }
}
