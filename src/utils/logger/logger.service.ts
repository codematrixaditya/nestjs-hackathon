import { Injectable, LoggerService as NestLoggerService } from '@nestjs/common';

@Injectable()
export class LoggerService implements NestLoggerService {
  log(message: string, ...optionalParams: unknown[]): void {
    console.log(`==> [LOG] ${message}`, ...optionalParams);
  }

  error(message: string, ...optionalParams: unknown[]): void {
    console.error(`==> [ERROR] ${message}`, ...optionalParams);
  }

  warn(message: string, ...optionalParams: unknown[]): void {
    console.warn(`==> [WARN] ${message}`, ...optionalParams);
  }

  debug(message: string, ...optionalParams: unknown[]): void {
    console.debug(`==> [DEBUG] ${message}`, ...optionalParams);
  }

  verbose(message: string, ...optionalParams: unknown[]): void {
    console.log(`==> [VERBOSE] ${message}`, ...optionalParams);
  }
}
