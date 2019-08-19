import React, { Component } from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

// You can change this key if you want
// But it may break if a bunch of y'all use it
const apiKey = "HJJwJEpiC6h7XUSo3GO35evZ993uhfHl"

class GifListContainer extends Component {

  // When the user makes their fetch request, we need to change the GifList 
  state = {
    gifs: []
  }

  // Only defined here in the state we're trying to change
  // But will be executed in its children
  handleSubmit = (event, searchTerm) => {
    event.preventDefault()
    fetch(`http://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=${apiKey}&rating=g`)
    .then( res => res.json() )
    .then( json => {
      const { data } = json
      const gifs = data.slice(0, 3).map(gif => {
        return {
          id: gif.id,
          url: gif.images.original.url,
          title: gif.title
        }
      })

      this.setState({
        gifs
      })
      // Same as the one above
      // this.setState({
      //   gifs: gifs
      // })
    })
  }

  render() {
    return (
      <React.Fragment>
        <GifSearch handleSubmit={this.handleSubmit}/>
        <GifList gifs={this.state.gifs} />
      </React.Fragment>
    )
  }
}

export default GifListContainer