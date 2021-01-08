import { Field, ObjectType } from '@nestjs/graphql';
import { extend } from '@nestjs/graphql/dist/utils';
import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { BookEntity } from './book.entity';

@Entity()
@ObjectType()
export class UserEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  @Field((type) => Number)
  id: number;

  @Field((type) => String)
  @Column({ length: 500 })
  name: string;

  @OneToMany((type) => BookEntity, (book) => book.user)
  books: BookEntity[];
}
