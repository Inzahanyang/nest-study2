import { ObjectType, Field } from '@nestjs/graphql';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { PcastEntity } from './pcast.entity';

@ObjectType()
@Entity()
export class EpiEntity {
  @PrimaryGeneratedColumn()
  @Field((type) => Number)
  id: number;

  @Field((type) => String)
  @Column()
  title: string;

  @Field((type) => String)
  @Column()
  category: string;

  @Field(() => PcastEntity)
  @ManyToOne(() => PcastEntity, (pcast) => pcast.epis)
  pcast: PcastEntity;
}
