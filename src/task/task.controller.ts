import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Post,
  Put,
  Query,
  Req,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { Request } from 'express';
import { TaskDTO } from './dto/task.dto';
import { TaskService } from './task.service';

@Controller('api/v1/task')
export class TaskController {
  // @Get('done')
  // method(@Req() req: Request) {
  //   return `method ${req.method}`;
  // }
  // @Post()
  // method(@Req() req: Request) {
  //   return `method ${req.method}`;
  // }
  // @Post(':id/description/:description/isdone/:isdone')
  /* @Post()
  method(
    @Query('id') id: number,
    @Query('description') description: string,
    @Query('isdone') isdone: boolean,
  ) {
    return { id, description, isdone };
  } */

  /* @Post()
  method(@Query() query: any) {
    return { query };
  } */

  constructor(private readonly taskService: TaskService) {}
  @Post()
  /* @UsePipes(new ValidationPipe()) */
  create(@Body() taskDTO: TaskDTO) {
    // throw new BadRequestException('Error en Peticion');
    // throw new HttpException('Error en peticion', HttpStatus.BAD_REQUEST);
    return new Promise((resolve, reject) => {
      // setTimeout(() => reject('Error en peticion'), 2000)
      setTimeout(() => reject('something wrong'), 12000)
    })

    // return this.taskService.create(taskDTO);
  }

  @Get()
  findAll() {
    return this.taskService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.taskService.findOne(id)
  }

  // method(@Body('description') description: any) {
  //   return { description };
  // }
  @Put(':id')
  update(@Param('id') id: string, @Body() taskDTO: TaskDTO) {
    return this.taskService.update(id, taskDTO);
  }

  // @Patch()
  // method(@Req() req: Request) {
  //   return `method ${req.method}`;
  // }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.taskService.delete(id);
  }
}
