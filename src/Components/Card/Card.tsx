import React from 'react'
import './Card.css'

type Props = {}

const Card = (props: Props) => {
  return (
    <div className='card'>
        <img
            src="https://images.unsplash.com/photo-1630332159758-c02a3accc8fb"
            alt="Image"
        />
        <div className='details'>
            <h2>APPL</h2>
            <p>$110</p>
        </div>
        <p className='info'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus, voluptatibus!</p>

    </div>
  )
}

export default Card
