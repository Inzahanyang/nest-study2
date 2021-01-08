import { Field, InputType } from '@nestjs/graphql';
import { IsNumber, IsString } from 'class-validator';

@InputType()
export class CreateEpiDto {
  @Field((type) => String)
  @IsString()
  readonly title: string;

  @Field((type) => String)
  @IsString()
  readonly category: string;

  @Field((type) => Number)
  @IsNumber()
  readonly rating: number;

  @Field((type) => Number)
  readonly userId: number;
}
