import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateBookDto {
  @Field((type) => String)
  readonly name: string;
  @Field((type) => Number)
  readonly userID: number;
  @Field((type) => Number)
  readonly genreIDs: number[];
}
