import { Field, ObjectType } from '@nestjs/graphql';
import {
  BaseEntity,
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { GenreEntity } from './genre.entity';
import { UserEntity } from './user.entity';

@ObjectType()
@Entity()
export class BookEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  @Field((type) => Number)
  id: number;

  @Column({ length: 500 })
  @Field((type) => String)
  name: string;

  @ManyToOne((type) => UserEntity, (user) => user.books)
  user: UserEntity;

  @ManyToMany((type) => GenreEntity)
  @JoinTable()
  genres: GenreEntity[];
}
