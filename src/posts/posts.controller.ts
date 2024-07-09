import { Controller, Get, NotFoundException, Param, ParseIntPipe, UseFilters } from '@nestjs/common';
import { PostsService } from './posts.service';
import { HttpExceptionFilter } from 'src/filter/http-exception.filter';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService){}
  @Get()
  findAll(){
    return this.postsService.findAll();
  }

  @Get('raise-error')
  raise(){
    throw new NotFoundException();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number){
    return this.postsService.findOne(id);
  }
}
