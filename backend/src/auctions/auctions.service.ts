import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateAuctionDto } from './dto/create-auction.dto';
import { UpdateAuctionDto } from './dto/update-auction.dto';
import { PrismaService } from '../prisma/prisma.service';
import { Item, Picture } from '@prisma/client';

@Injectable()
export class AuctionsService {
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<Item[]> {
    const items = await this.prisma.item.findMany({
      include: { pictures: true },
    });
    return items;
  }

  async create(createAuctionDto: CreateAuctionDto): Promise<Item>  {
    const {
      title,
      buyNowPrice,
      startingBid,
      description,
      pictures,
      sellerId,
      category,
      condition,
      expiresAt,
    } = createAuctionDto;

    const currentDate = Date.now();
    const endDate = new Date(currentDate + expiresAt);

    const newEntry = await this.prisma.item.create({
      data: {
        title,
        buyNowPrice,
        startingBid,
        description,
        pictures: {
          create: pictures.map((pic) => ({ url: pic })), // add altText later
        },
        seller: {
          connect: {
            id: sellerId,
          },
        },
        category,
        condition,
        expiresAt: endDate,
      },
    });
    console.log(newEntry);
    return newEntry;
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
