import { Episode } from './episode.entity';
import { ObjectType, Field, InputType } from '@nestjs/graphql';
import { IsString, IsNumber, IsOptional } from 'class-validator';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { CoreEntity } from 'src/common/entities/core.entity';

@InputType({ isAbstract: true })
@ObjectType()
@Entity()
export class Podcast extends CoreEntity {
  @Field((_) => String)
  @Column()
  @IsString()
  title: string;

  @Field((_) => String)
  @Column()
  @IsString()
  category: string;

  @Field((_) => Number, { nullable: true })
  @Column({ default: 0 })
  @IsOptional()
  @IsNumber()
  rating: number;

  @Field((_) => [Episode])
  @OneToMany((type) => Episode, (episode) => episode.podcast)
  episodes: Episode[];
}
