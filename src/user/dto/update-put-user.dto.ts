import { IsEmail, IsString, IsStrongPassword } from 'class-validator';
import { CreateUserDTO } from './create-user.dto';

export class UpdatePutUserDTO extends CreateUserDTO {
  @IsString()
  name: string;
  @IsEmail()
  email: string;
  @IsStrongPassword({
    minLength: 6,
    minNumbers: 0,
    minLowercase: 0,
    minUppercase: 0,
    minSymbols: 0,
  })
  password: string;
}
