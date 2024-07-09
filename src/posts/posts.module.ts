import { Module } from '@nestjs/common';
import { PostsController } from './posts.controller';
import { PostsService } from './posts.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Post } from './entities/post.entity';
import { User } from 'src/users/entities/user.entity';
import { APP_FILTER } from '@nestjs/core';
import { HttpExceptionFilter } from 'src/filters/http-exception.filter';

@Module({
  imports: [TypeOrmModule.forFeature([Post,User])],
  controllers: [PostsController],
  providers: [PostsService,
  // {
  //   provide: APP_FILTER,
  //   useClass: HttpExceptionFilter
  // }
]
})
export class PostsModule {}
