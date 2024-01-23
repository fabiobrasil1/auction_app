import { ConfigModule } from '@nestjs/config';
import { UserModule } from './modules/user/user.module';
import { Module } from '@nestjs/common';
import { PrismaModule } from 'nestjs-prisma';

@Module({
  imports: [
    // ConfigModule.forRoot(),
    // PrismaModule.forRoot(),
    UserModule,
  ],

  providers: [],
})
export class AppModule { }
