import { Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  register() {
    // Implement registration logic here
  }

  @Post('login')
  login() {
    // Implement login logic here
  }
}
