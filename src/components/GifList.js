import React from 'react'

export default function GifList(props){

  const gifLis = () => {
    console.log('Does it work????')
    return props.gifs.map(gif => {
      return <li key={gif.id}><img src={gif.url} alt={gif.title} /></li>
    })
  }


  return (<ul>
    {gifLis()}
  </ul>)
}