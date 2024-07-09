import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
  ParseIntPipe,
  Patch,
  ValidationPipe,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { CreateProfileDto } from 'src/profiles/dto/create-profile.dto';
import { CreatePostDto } from 'src/posts/dto/create-post.dto';
import { AuthGuard } from 'src/guards/auth.guard';
import { LoggingInterceptor } from 'src/interceptors/logging.interceptor';


@Controller('users')
@UseGuards(AuthGuard) //controller guard
@UseInterceptors(LoggingInterceptor)
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async createUser(@Body(ValidationPipe) createUserDto: CreateUserDto) {
    await this.usersService.createUser(createUserDto);
    return 'create sucesds';
  }
  // @UseGuards(AuthGuard) //route handler guard
  @Get()
  @UseInterceptors(LoggingInterceptor)
  findAll() {
    return this.usersService.findAll();
  }

  // @Get('custom')
  // async findAny(@User('firstName') firstName: string) {
  //   console.log(`Hello ${firstName}`);
  // }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.usersService.findOne(+id);
  }

  @Patch(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body(ValidationPipe) updateUserDto: UpdateUserDto,
  ) {
    await this.usersService.update(id, updateUserDto);
    return 'updated successfully';
  }

  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: number) {
    await this.usersService.remove(+id);
    return 'deleted successfully';
  }

  @Post(':id/profiles')
  createUserProfile(
    @Param('id', ParseIntPipe) id: number,
    @Body() CreateProfileDto: CreateProfileDto,
  ) {
    return this.usersService.createUserProfile(id, CreateProfileDto);
  }

  @Post(':id/posts')
  createUserPost(
    @Param('id', ParseIntPipe) id: number,
    @Body() CreatePostDto: CreatePostDto,
  ) {
    return this.usersService.createUserPost(id, CreatePostDto);
  }
}
