import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    JwtModule.register({
      secret: 'FggBaK-ULs1<voH/2L4r{9e&!3q7ONCO',
    }),
  ],
})
export class AuthMmodule {}
