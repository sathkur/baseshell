import { Controller, Get, Ip, Param, Req } from '@nestjs/common';
import { Request } from 'express';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get(["hello", "hello/:id"])
  hi(@Req() request: Request, @Ip() ip, @Param() params: any): string {
    return "Hello from Baseshell : " + (request.url) + ", IP=" + ip + ", ID: " + params.id;
  }
}
