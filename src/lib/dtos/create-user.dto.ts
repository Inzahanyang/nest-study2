import { Field, InputType } from '@nestjs/graphql';
import { IsNumber, IsString } from 'class-validator';

@InputType()
export class CreateUserDto {
  @Field((_) => String)
  @IsString()
  readonly name: string;

  @Field((_) => Number)
  @IsNumber()
  readonly books: number[];
}
