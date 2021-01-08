import { ObjectType, Field } from '@nestjs/graphql';
import { IsString, IsNumber, IsOptional } from 'class-validator';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { EpiEntity } from './epi.entity';

@ObjectType()
@Entity()
export class PcastEntity {
  @PrimaryGeneratedColumn()
  @Field((type) => Number)
  id: number;

  @Field((type) => String)
  @Column()
  @IsString()
  title: string;

  @Field((type) => String)
  @Column()
  @IsString()
  category: string;

  @Field((type) => Number)
  @Column()
  @IsNumber()
  rating: number;

  @Field((type) => [EpiEntity])
  @OneToMany((type) => EpiEntity, (epi) => epi.pcast)
  epis: EpiEntity[];
}
