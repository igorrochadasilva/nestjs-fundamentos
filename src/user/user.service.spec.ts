import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from './user.service';
import { userRepositoryMock } from '../testing/use-repository.mock';

describe('UserService', () => {
  let userService: UserService;

  //create the module to use UserService
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserService, userRepositoryMock],
    }).compile();

    userService = module.get<UserService>(UserService);
  });

  test('Validar a definição', () => {
    expect(userService).toBeDefined();
  });
});
