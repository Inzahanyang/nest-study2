import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateEpiDto } from '../dtos/create-epi.dto';
import { EpiEntity } from '../entities/epi.entity';

@Injectable()
export class EpiService {
  constructor(
    @InjectRepository(EpiEntity) private readonly epis: Repository<EpiEntity>,
  ) {}
  //   async createEpisode(id: number, data: CreateEpiDto) {
  //     const epi = new EpiEntity();
  //     epi.title = data.title;
  //     epi.category = data.category;
  //     // epi.pcast = data.userId;
  //   }

  //   //   async insert(bookDetails: CreateBookDto): Promise<BookEntity> {
  //   //     const { name , userID  } = bookDetails;
  //   //     const book = new BookEntity();
  //   //     book.name = name;
  //   //     book.user = await UserEntity.findOne(userID) ;
  //   //     await book.save();
  //   //     return book;
  //   //   }

  getAllEpisodes() {}
  getEpisode() {}
  deleteEpisode() {}
  updateEpisode() {}
}
