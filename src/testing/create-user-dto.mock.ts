import { Role } from '../enums/role.enum';
import { CreateUserDTO } from '../user/dto/create-user.dto';

export const createUserDTO: CreateUserDTO = {
  birthAt: '2000-01-01',
  name: 'Igor',
  email: 'igor082011@gmail.com.br',
  password: 'DH@HHUHF#@',
  role: Role.Admin,
};
