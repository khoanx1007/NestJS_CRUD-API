import { Module, Scope } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Profile } from 'src/profiles/entities/profile.entity';
import { Post } from 'src/posts/entities/post.entity';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { LoggingInterceptor } from 'src/interceptors/logging.interceptor';
import { RequestService } from 'src/request.service';
@Module({
  imports: [TypeOrmModule.forFeature([User, Profile, Post])],
  controllers: [UsersController],
  providers: [UsersService, RequestService]
})
//specific module middleware
export class UsersModule{}
