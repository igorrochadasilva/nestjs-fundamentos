import { Role } from '../enums/role.enum';
import { UpdatePutUserDTO } from '../user/dto/update-put-user.dto';

export const updatePutUserDTO: UpdatePutUserDTO = {
  birthAt: '2000-01-01',
  name: 'Igor',
  email: 'igor082011@gmail.com.br',
  password: 'DH@HHUHF#@',
  role: Role.Admin,
};
