import { Controller, Delete, Get, Param, Post, Put, Req } from '@nestjs/common';
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
  @Post(':id/description/:description/isdone/:isdone')
  method(@Param('id') id: number,
    @Param('description') description: string,
    @Param('isdone') isdone: boolean,
  ) {
    return {id, description, isdone};
  }
  // @Put()
  // method(@Req() req: Request) {
  //   return `method ${req.method}`;
  // }
  // @Patch()
  // method(@Req() req: Request) {
  //   return `method ${req.method}`;
  // }
  // @Delete()
  // method(@Req() req: Request) {
  //   return `method ${req.method}`;
  // }
}
