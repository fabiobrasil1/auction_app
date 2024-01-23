import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { UserRegisterDto } from './dtos/user-register.dto';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) { }
  @Post('users')
  async registerUser(@Body() params: UserRegisterDto) {
    return await this.userService.userRegister(params);
  }
}
