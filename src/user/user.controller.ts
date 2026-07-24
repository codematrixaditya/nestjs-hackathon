import { Body, Controller, Get, Post, Put, Query } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User, UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getUsers(@Query('name') name: string): User[] {
    const users = this.userService.findAllUsers(name);

    return users;
  }

  @Get(':id')
  getUser(@Query('id') id: string) {
    const users = [
      { id: 1, name: 'John Doe' },
      { id: 2, name: 'Jane Smith' },
      { id: 3, name: 'Alice Johnson' },
    ];

    return users.find((user) => user.id === parseInt(id));
  }

  @Post()
  createUser(@Body() createUserDto: CreateUserDto) {
    return {
      message: 'User created successfully',
      data: createUserDto,
    };
  }

  @Put(':id')
  updateUser(@Query('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return {
      message: `User with ID ${id} updated successfully`,
      data: { id, ...updateUserDto },
    };
  }
}
