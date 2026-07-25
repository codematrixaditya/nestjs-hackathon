import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoggerService } from './logger/logger.service';
import { UserModule } from './user/user.module';
import { ApiKeyMiddleware } from './middleware/api-key.middleware';
import { UserController } from './user/user.controller';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [UserModule, AuthModule],
  controllers: [AppController],
  providers: [AppService, LoggerService],
})
export class AppModule {}

// export class AppModule implements NestModule {
//   configure(consumer: MiddlewareConsumer): void {
//     consumer.apply(ApiKeyMiddleware).forRoutes(UserController);
//   }
// }
