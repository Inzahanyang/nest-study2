import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from 'src/lib/dtos/create-user.dto';
import { UserEntity } from 'src/lib/entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly users: Repository<UserEntity>,
  ) {}

  async getAllUsers(): Promise<UserEntity[]> {
    return await this.users.find();
  }

  async createUser(createUserDto: CreateUserDto): Promise<UserEntity> {
    const userEntity = this.users.create();
    const { name } = createUserDto;
    userEntity.name = name;
    await UserEntity.save(userEntity);
    return userEntity;
  }

  //   async insert(createUserDto: CreateUserDto): Promise<UserEntity> {
  //     const userEntity: UserEntity = UserEntity.create();
  //     const { name } = userDetails;
  //     userEntity.name = name;
  //     await UserEntity.save(userEntity);
  //     return userEntity;
  //   }
}
