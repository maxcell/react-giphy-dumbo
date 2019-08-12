import React from 'react'

export default function GifList(props){
  // Here we have giflis
  const gifLis = props.gifs.map((gif) => { 
    return (
      <li key={gif.id}>
        <img src={gif.url} alt={gif.title} />
      </li>
      )

  })
  return <ul>{gifLis}</ul>
}