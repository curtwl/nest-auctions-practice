'use client'

import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import Link from 'next/link'
import Image from 'next/image'
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { useState } from 'react'

export default function AuctionDetailsCard({ data }) {
  console.log({ data })

  const [bidAmount, setBidAmount] = useState([])

  async function placeBid() {
    try {
      const response = await fetch(`/api/auctions/${data.id}/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ bidAmount: bidAmount }),
      })

      console.log(response)
      console.log(await response.json())
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      <div className='grid grid-cols-1 md:grid-cols-5 m-10 gap-8'>
        <div className='border md:col-span-3'>
          <h1 className='text-lef text-3xl mt-12 mb-6 text-center'>
            {data.title}
          </h1>
          <Image
            width={600}
            alt={`${data.title} card`}
            src={data?.pictures[0]?.url}
            className='p-5 rounded'
          />
        </div>
        <div className='border md:col-start-4 col-span-2'>
          <Card className='max-w-[600px]'>
            <CardHeader className='flex gap-3'>
              <div>
                <p className='text-xl font-bold'>Item Details</p>
              </div>
            </CardHeader>
            <Separator />
            <CardContent>
              <p>Description: {data.description}</p>
            </CardContent>
            <Separator />
            <CardContent>
              <p>Condition: {data.condition}</p>
            </CardContent>
            <Separator />
            <CardContent>
              <p>Category: {data.category}</p>
            </CardContent>
            <Separator />

            <CardContent>
              <p>Seller Name: sellername</p>
            </CardContent>
            <Separator />
            <CardContent>
              <p>Seller Rating: rating</p>
            </CardContent>
            <Separator />
          </Card>
        </div>
      </div>
      <div className='grid grid-cols-3 md:grid-cols-5 m-10 gap-8'>
        <div className='md:col-start-2 col-span-3'>
          <Card className='max-w-[600px]'>
            <CardHeader className='flex gap-3'>
              <div>
                <p className='text-xl font-bold'>Bid Information</p>
              </div>
            </CardHeader>
            <Separator />
            <CardContent>
              <p>Bid Status</p>
            </CardContent>
            <Separator />
            <CardContent>
              <p>Starting Bid: ${data.startingBid}</p>
            </CardContent>
            <Separator />
            <CardContent>
              <p>Current Bid: ${data.currentBid}</p>
            </CardContent>
            <Separator />
            <CardContent className='flex flex-row justify-between items-center'>
              <p>Buy Now Price: ${data.buyNowPrice}</p>
              <Button color='secondary'> Buy Now</Button>
            </CardContent>
            <Separator />
            <CardContent>
              <p>Time Remaining: {data.expiresAt}</p>
            </CardContent>
            <Separator />
            <div>
              <Input
                type='text'
                label='$ bid'
                onChange={(e) => setBidAmount(e.target.value)}
                value={bidAmount}
              />
            </div>
            <Button color='primary' onClick={placeBid}>
              Bid
            </Button>
          </Card>
        </div>
      </div>
    </div>
  )
}
