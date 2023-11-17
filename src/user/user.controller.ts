import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
} from '@nestjs/common';
import { CreateUserDTO } from './dto/create-user.dto';

@Controller('users')
export class UserController {
  @Post()
  async create(@Body() { email, name, password }: CreateUserDTO) {
    return { email, name, password };
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

  @Put(':id')
  async update(@Body() body, @Param() params) {
    return {
      method: 'put',
      body,
      params,
    };
  }

  @Patch(':id')
  async updatePartial(@Body() body, @Param() params) {
    return {
      method: 'patch',
      body,
      params,
    };
  }

  @Delete(':id')
  async delete(@Param() params) {
    return {
      params,
    };
  }
}
