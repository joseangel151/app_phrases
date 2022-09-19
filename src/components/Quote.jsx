import React from 'react'

const Quote = ({randomQuote}) => {
  return (
    <div>
        <p className='card__quotes'><spam>"</spam> {randomQuote.quote}<span>"</span></p>
        <h1 className='card__author'>{randomQuote.author}</h1> </div>
  )
}

export default Quote