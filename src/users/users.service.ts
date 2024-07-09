import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { Profile } from 'src/profiles/entities/profile.entity';
import { Post } from 'src/posts/entities/post.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { CreatePostDto } from 'src/posts/dto/create-post.dto';
import { CreateProfileDto } from 'src/profiles/dto/create-profile.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
    @InjectRepository(Profile) private profileRepository: Repository<Profile>,
    @InjectRepository(Post) private postRepository: Repository<Post>,
  ) {}
  createUser(createUserDTO: CreateUserDto) {
    const newUser = this.userRepository.create({
      ...createUserDTO,
      createdAt: new Date(),
    });
    return this.userRepository.save(newUser);
  }

  findAll() {
    return this.userRepository.find({ relations: ['profile', 'posts'] });
  }

  findOne(id: number) {
    return this.userRepository.findOneBy({ id });
  }

  update(id: number, updateUserDTO: UpdateUserDto) {
    return this.userRepository.update({ id }, { ...updateUserDTO });
  }

  remove(id: number) {
    return this.userRepository.delete({ id });
  }
  async createUserProfile(
    id: number,
    createUserProfile: CreateProfileDto,
  ) {
    const user = await this.userRepository.findOneBy({ id });
    if (!user) {
      throw new HttpException('User not found', HttpStatus.BAD_REQUEST);
    }
    const newProfile = this.profileRepository.create(createUserProfile);
    const savedProfile = await this.profileRepository.save(newProfile);
    user.profile = savedProfile;
    return this.userRepository.save(user);
  }

  async createUserPost(id: number, createPostDto: CreatePostDto) {
    const user = await this.userRepository.findOneBy({ id });
    if (!user) {
      throw new HttpException('User not found', HttpStatus.BAD_REQUEST);
    }
    const newPost = this.postRepository.create({
      ...createPostDto,
      user,
      createdAt: new Date(),
    });
    return this.postRepository.save(newPost);
  }
}
