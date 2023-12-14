import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { AuthService } from '../auth/auth.service';
import { UserService } from '../user/user.service';

@Injectable()
//the guard will take the authorization from the header
export class AuthGuard implements CanActivate {
  constructor(
    //@Inject(forwardRef(() => AuthService)) -> form to fix the circular dependency
    private readonly authService: AuthService,
    private readonly userService: UserService,
  ) {}

  async canActivate(context: ExecutionContext) {
    const request = context.switchToHttp().getRequest();
    const { authorization } = request.headers;

    try {
      const data = this.authService.checkToken(
        (authorization ?? '').split(' ')[1],
      );

      request.tokenPayLoad = data;

      request.user = await this.userService.show(data.id);

      return true;
    } catch (e) {
      return false;
    }
  }
}
