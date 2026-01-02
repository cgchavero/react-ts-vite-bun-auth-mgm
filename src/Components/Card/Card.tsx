import React from 'react'
import './Card.css'

interface Props {
    companyName: string
    ticker: string
    price: number
}

const Card = ({ companyName, ticker, price }: Props) => {
  return (
    <div className='card'>
        <img
            src="https://images.unsplash.com/photo-1630332159758-c02a3accc8fb"
            alt="Image"
        />
        <div className='details'>
            <h2>{companyName} ({ticker})</h2>
            <p>${price}</p>
        </div>
        <p className='info'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus, voluptatibus!</p>

    </div>
  )
}

export default Card
