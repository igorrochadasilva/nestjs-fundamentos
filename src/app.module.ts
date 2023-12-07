import { Module, forwardRef } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { AuthMmodule } from './auth/auth.module';

@Module({
  imports: [forwardRef(() => UserModule), forwardRef(() => AuthMmodule)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
