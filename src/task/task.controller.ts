import { Controller, Delete, Get, Post, Put, Req } from '@nestjs/common';
import { Request } from 'express';

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
  // @Put()
  // method(@Req() req: Request) {
  //   return `method ${req.method}`;
  // }
  // @Patch()
  // method(@Req() req: Request) {
  //   return `method ${req.method}`;
  // }
  @Delete()
  method(@Req() req: Request) {
    return `method ${req.method}`;
  }
}
