import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
  forwardRef,
} from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';

import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './entity/user.entity';
import { AuthMmodule } from '../auth/auth.module';
import { UserIdCheckMiddleware } from '../middlewares/use-id-check.middleware';

@Module({
  imports: [
    forwardRef(() => AuthMmodule),
    TypeOrmModule.forFeature([UserEntity]),
  ],
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
