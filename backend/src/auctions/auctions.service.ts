import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateAuctionDto } from './dto/create-auction.dto';
import { UpdateAuctionDto } from './dto/update-auction.dto';
import { PrismaService } from '../prisma/prisma.service';
import { Item, Picture } from '@prisma/client';

@Injectable()
export class AuctionsService {
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<Item[]>{
    const items = await this.prisma.item.findMany({
      include: { pictures: true },
    });
    return items;
  }

  create(createAuctionDto: CreateAuctionDto) {
    return 'This action adds a new auction';
  }

  // findOne(id: number) {
  //   return `This action returns a #${id} auction`;
  // }

  // update(id: number, updateAuctionDto: UpdateAuctionDto) {
  //   return `This action updates a #${id} auction`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} auction`;
  // }
}
