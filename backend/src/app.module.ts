import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
// import { setupSwagger } from './swagger.config';
import { AuctionsModule } from './auctions/auctions.module';

@Module({
  imports: [PrismaModule, AuctionsModule, ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
