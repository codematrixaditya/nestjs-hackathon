import {
  Body,
  Controller,
  Delete,
  Get,
  ParseIntPipe,
  Post,
  Put,
  Query,
  UseGuards,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User, UserService } from './user.service';
import { RoleGuard } from '../guards/role.guard';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getUsers(@Query('name') name: string): User[] {
    const users = this.userService.findAllUsers(name);

    return users;
  }

  @Get(':id')
  getUserById(@Query('id', ParseIntPipe) id: number) {
    const users = [
      { id: 1, name: 'John Doe' },
      { id: 2, name: 'Jane Smith' },
      { id: 3, name: 'Alice Johnson' },
    ];

    return users.find((user) => user.id === id);
  }

  @Post()
  createUser(@Body() createUserDto: CreateUserDto) {
    return {
      message: 'User created successfully',
      data: createUserDto,
    };
  }

  @Put(':id')
  updateUser(
    @Query('id', ParseIntPipe) id: number,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    return this.userService.updateUser(id, updateUserDto);
  }

  @Delete(':id')
  @UseGuards(RoleGuard)
  deleteUser(@Query('id', ParseIntPipe) id: number) {
    return this.userService.deleteUser(id);
  }
}
