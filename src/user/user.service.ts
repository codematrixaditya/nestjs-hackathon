import { Injectable } from '@nestjs/common';
import { LoggerService } from '../logger/logger.service';
@Injectable()
export class UserService {
  constructor(private readonly logger: LoggerService) {}
}
