export class CreateAuctionDto {
  title: string;
  buyNowPrice: number;
  startingBid: number;
  description: string;
  pictures: string[];
  sellerId: number;
  category: string;
  condition: string;
  expiresAt: number;
}
