import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { AuthMmodule } from './auth/auth.module';

@Module({
  imports: [UserModule, AuthMmodule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
