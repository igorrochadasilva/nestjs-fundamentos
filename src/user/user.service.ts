import { Injectable } from '@nestjs/common';
import { CreateUserDTO } from './dto/create-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async create({ name, password, email }: CreateUserDTO) {
    return this.prisma.users.create({
      data: {
        email,
        name,
        password,
      },
    });
  }

  async list() {
    return this.prisma.users.findMany();
  }

  async show(id: number) {
    return this.prisma.users.findUnique({
      where: {
        id,
      },
    });
  }
}
