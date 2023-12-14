import { Role } from '../enums/role.enum';

export const userEntityList = [
  {
    name: 'Igor',
    email: 'igor082011@gmail.com.br',
    birthAt: new Date('2000-01-01'),
    id: 1,
    password: '$2b$10$uwHTDkY5BkZbEVl2SkdTp.s6L3lN4eEaf3/WNp4op6UX.n82XiBJ2',
    role: Role.Admin,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    name: 'Yuri',
    email: 'yuri@gmail.com.br',
    birthAt: new Date('2000-01-01'),
    id: 2,
    password: '$2b$10$uwHTDkY5BkZbEVl2SkdTp.s6L3lN4eEaf3/WNp4op6UX.n82XiBJ2',
    role: Role.Admin,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];
