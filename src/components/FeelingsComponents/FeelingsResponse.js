import React, { useState, useEffect } from 'react'

function FeelingsResponse(props) {
  const [quote, setQuote] = useState(null)
  const [author, setAuthor] = useState(null)

  useEffect(() => {
    fetch('https://api.quotable.io/random')
      .then((response) => response.json())
      .then((data) => {
        setQuote(data.content)
        setAuthor(data.author)
        // setQuoteData(data)
        // setQuoteData({ ...data })
        console.log(`${data.content} —${data.author}`)
      })
  }, [])

  return (
    <div>
      <h3>You feel {props.feeling.toLowerCase()}.</h3>
      <figure>
        <blockquote>{quote}</blockquote>
        <figcaption>
          <cite>{author}</cite>
        </figcaption>
      </figure>
    </div>
  )
}

export default FeelingsResponse
