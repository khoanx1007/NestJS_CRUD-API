import { Controller, Get, NotFoundException, Param, ParseIntPipe, UseFilters } from '@nestjs/common';
import { PostsService } from './posts.service';
import { HttpExceptionFilter } from 'src/filters/http-exception.filter';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService){}
  @Get()
  findAll(){
    throw new NotFoundException();
  }

  @Get('error')
  @UseFilters(HttpExceptionFilter)
  raise(){
    throw new NotFoundException();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number){
    return this.postsService.findOne(id);
  }
}
