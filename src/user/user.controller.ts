import { Body, Controller, Get, Param, Patch, Post, Put } from '@nestjs/common';

@Controller('users')
export class UserController {
  @Post()
  async create(@Body() body) {
    return { body };
  }

  @Get()
  async list() {
    return {
      users: [
        {
          name: 'user1',
          email: 'user1@gmail.com',
        },
        {
          name: 'user2',
          email: 'user2@gmail.com',
        },
        {
          name: 'user3',
          email: 'user3@gmail.com',
        },
        ,
        {
          name: 'user4',
          email: 'user4@gmail.com',
        },
      ],
    };
  }

  @Get(':id')
  async show(@Param() param) {
    return { user: {}, param };
  }
}
