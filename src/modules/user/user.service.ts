import { Injectable } from '@nestjs/common';
import { UserRegisterDto } from './dtos/user-register.dto';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class UserService {
  async userRegister(params: UserRegisterDto) {
    const prisma = new PrismaClient();
    return await prisma.user.create({ data: params });
  }
}
