'use client'

import { useState } from 'react'
import AuctionForm from '../../components/AuctionForm'

const AddAuction = (props: any) => {
  // const { data: session } = useSession()
  // console.log(session?.user?.id)

  const [submitting, setSubmitting] = useState(false)
  const [itemData, setItemData] = useState({
    title: '',
    buyNowPrice: '',
    startingBid: '',
    currentBid: '',
    description: '',
    pictures: [],
    sellerId: '',
    soldById: '',
    purchasedById: '',
    category: '',
    condition: '',
    expiresAt: '',
  })

  const resetForm = () => {
    setItemData({
      title: '',
      condition: '',
      description: '',
      startingBid: '',
      buyNowPrice: '',
      expiresAt: '',
      category: '',
      pictures: '',
    })
  }

  const listAuctionItem = async (e: any) => {
    e.preventDefault()
    setSubmitting(true)

    // End auction expiresAt days from now
    const auctionLength: number = itemData.expiresAt * 24 * 60 * 60 * 1000

    try {
      const response = await fetch('http://localhost:8080/api/auctions/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: itemData.title,
          buyNowPrice: itemData.buyNowPrice,
          startingBid: itemData.startingBid,
          currentBid: itemData.currentBid,
          description: itemData.description,
          pictures: [itemData.pictures],
          sellerId: 1,
          category: itemData.category,
          condition: itemData.condition,
          expiresAt: auctionLength,
        }),
      })
      if (response.status !== 201) {
        console.log(itemData.title, 'title')
        console.log(response)
        console.log('Something went wrong')
      } else {
        console.log(response)
        console.log('Item has been listed successfully')
      }
    } catch (error) {
      console.log('There was an error listing the item', error)
    } finally {
      setSubmitting(false)
      resetForm()
    }
  }

  return (
    <AuctionForm
      type='Add Item'
      itemData={itemData}
      setItemData={setItemData}
      handleSubmit={listAuctionItem}
    />
  )
}

export default AddAuction
