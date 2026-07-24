import { Injectable, NotFoundException } from '@nestjs/common';
import { LoggerService } from '../logger/logger.service';

export interface User {
  id: number;
  name: string;
  email: string;
}

@Injectable()
export class UserService {
  constructor(private readonly logger: LoggerService) {}

  private users: User[] = [
    { id: 1, name: 'John Doe', email: 'john.doe@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com' },
    { id: 3, name: 'Alice Johnson', email: 'alice.johnson@example.com' },
  ];

  findAllUsers(name?: string): User[] {
    this.logger.log(`Finding users with name filter: ${name ?? 'none'}`);

    if (name) {
      return this.users.filter((user) =>
        user.name.toLowerCase().includes(name.toLowerCase()),
      );
    }

    return this.users;
  }

  findUserById(id: number): User | undefined {
    this.logger.log(`Finding user by id: ${id}`);

    const user = this.users.find((user) => user.id === id);

    if (!user) {
      this.logger.warn(`User with id ${id} not found`);
      throw new NotFoundException(`User with id ${id} not found`);
    }

    return user;
  }

  createUser(user: User): User {
    const nextId = this.users.length + 1;
    const newUser: User = {
      id: nextId,
      name: user.name,
      email: user.email,
    };

    this.users.push(newUser);
    this.logger.log(`Created user with id: ${newUser.id}`);

    return newUser;
  }

  updateUser(id: number, updatedUser: Partial<User>): User | undefined {
    const userIndex = this.users.findIndex((user) => user.id === id);

    if (userIndex !== -1) {
      this.users[userIndex] = { ...this.users[userIndex], ...updatedUser };
      this.logger.log(`Updated user with id: ${id}`);
      return this.users[userIndex];
    }

    this.logger.warn(`Unable to update user with id: ${id}`);
    return undefined;
  }

  deleteUser(id: number): boolean {
    const userIndex = this.users.findIndex((user) => user.id === id);
    if (userIndex !== -1) {
      this.users.splice(userIndex, 1);
      this.logger.log(`Deleted user with id: ${id}`);
      return true;
    }
    this.logger.warn(`Unable to delete user with id: ${id}`);
    return false;
  }
}
