import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { UserService } from '../user/user.service';
import { RegisterUserDto } from '../dto/register-user.dto';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService) {}

  registerUser(registerUserDto: RegisterUserDto) {
    const saltRounds = 10;
    const hashedPassword = bcrypt.hashSync(
      registerUserDto.password,
      saltRounds,
    );

    return this.userService.createUser({
      ...registerUserDto,
      password: hashedPassword,
    });
  }

  login() {
    return { message: 'User logged in successfully' };
  }
}
