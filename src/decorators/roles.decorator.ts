import { SetMetadata } from '@nestjs/common';
import { Role } from '../enums/role.enum';

//this decorator is responsable to set the role of the route
export const ROLES_KEY = 'roles';
export const Roles = (...roles: Role[]) => SetMetadata(ROLES_KEY, roles);
