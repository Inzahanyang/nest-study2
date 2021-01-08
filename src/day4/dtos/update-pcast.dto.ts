import { Field, InputType, PartialType } from '@nestjs/graphql';
import { CreatePcastDto } from './create-pcast.dto';

@InputType()
class UpdatePcastInputType extends PartialType(CreatePcastDto) {}

@InputType()
export class UpdatePcastDto {
  @Field((type) => Number)
  id: number;

  @Field((type) => UpdatePcastInputType)
  data: UpdatePcastInputType;
}
