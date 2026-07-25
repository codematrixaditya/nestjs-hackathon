import { Injectable } from '@nestjs/common';
import { LoggerService } from '../logger/logger.service';
import { RegisterUserDto } from '../dto/register-user.dto';
@Injectable()
export class UserService {
  constructor(private readonly logger: LoggerService) {}

  createUser(registerUserDto: RegisterUserDto) {
    this.logger.log(`Creating user with email: ${registerUserDto.email}`);
    // Logic to create a user in the database would go here
    return { message: 'User created successfully' };
  }
}
