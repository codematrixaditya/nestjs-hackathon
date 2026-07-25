import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { UserService } from '../user/user.service';
import { RegisterUserDto } from '../utils/dto/register-user.dto';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService) {}

  async registerUser(registerUserDto: RegisterUserDto) {
    const saltRounds = 10;
    const hashedPassword = bcrypt.hashSync(
      registerUserDto.password,
      saltRounds,
    );

    const user = await this.userService.createUser({
      ...registerUserDto,
      password: hashedPassword,
    });

    return user;
  }

  login() {
    return { message: 'User logged in successfully' };
  }
}
