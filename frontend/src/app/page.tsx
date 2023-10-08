'use client'
import { AuctionCard } from '../components/AuctionCard'
import { AuctionCategories } from '../components/AuctionCategories'
import { FeaturedAuctionFeed } from '../components/FeaturedAuctionFeed'
import Link from 'next/link'

export default async function Home() {
  return (
    <main className=''>
      <div className='p-5'>
        <FeaturedAuctionFeed />
        <AuctionCategories />
      </div>
    </main>
  )
}
