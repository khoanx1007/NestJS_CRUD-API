import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Post } from './entities/post.entity';
import { IsEmpty } from 'class-validator';

@Injectable()
export class PostsService {
  constructor(
  @InjectRepository(Post) private postRepository: Repository<Post>){}
  async findAll(){
    return this.postRepository.find({ relations: ['user'] })
  }

  async findOne(id: number){
    const post = await this.postRepository.findOne({
      where: { id },
      relations: ['user'],
    });
    if (!post) {
      throw new NotFoundException(`Post with ID ${id} not found`);
    }
    return post;
  }
}
