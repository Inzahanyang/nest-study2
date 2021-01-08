import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateUserDto } from 'src/lib/dtos/create-user.dto';
import { UserEntity } from 'src/lib/entities/user.entity';
import { UserService } from './user.service';

@Resolver((Of) => UserEntity)
export class UserResolver {
  constructor(private readonly userService: UserService) {}
  @Query((returns) => [UserEntity])
  getAllUsers(): Promise<UserEntity[]> {
    return this.userService.getAllUsers();
  }

  @Mutation((returns) => UserEntity)
  createUser(@Args('input') createUserDto: CreateUserDto): Promise<UserEntity> {
    return this.userService.createUser(createUserDto);
  }
}
