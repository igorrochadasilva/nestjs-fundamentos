import { PrismaModule } from 'src/prisma/prisma.module';
import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
  forwardRef,
} from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { UserIdCheckMiddleware } from 'src/middlewares/use-id-check.middleware';
import { AuthMmodule } from 'src/auth/auth.module';

@Module({
  imports: [PrismaModule, forwardRef(() => AuthMmodule)],
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService],
})
//apply middleware
export class UserModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(UserIdCheckMiddleware).forRoutes({
      path: 'users/:id',
      method: RequestMethod.ALL,
    });
  }
}
