import { Field, InputType, PartialType } from '@nestjs/graphql';
import { CreatePodcastInput } from './create-podcast.dto';

@InputType()
class UpdatePodcastInputType extends PartialType(CreatePodcastInput) {}

@InputType()
export class UpdatePodcastDto {
  @Field((type) => Number)
  id: number;

  @Field((type) => UpdatePodcastInputType)
  data: UpdatePodcastInputType;
}
