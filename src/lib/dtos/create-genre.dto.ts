import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateGenreDto {
  @Field((_) => String)
  readonly type: string;
}
