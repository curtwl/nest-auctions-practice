import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
// import { setupSwagger } from './swagger.config';
import { AuctionsModule } from './auctions/auctions.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [PrismaModule, AuctionsModule, UsersModule, ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
