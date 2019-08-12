import React from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

export default class GifListContainer extends React.Component {

  state = {
    gifs: [] // Initially, I will have no gifs
  }
  // Data Fetching inside of React
  // Render in two phases
  // 1. First time around is rendering a blank list
  // 2. Second time is a fetch request in componentDidMount (re-render -> setState)

  // componentDidMount(){
  //   fetch("http://api.giphy.com/v1/gifs/search?q=YOUR QUERY HERE&api_key=dc6zaTOxFJmzC&rating=g")
  // }

  // We'll define a function for submission next to the state we're trying to change
  // But execute it elsewhere

  handleSubmit = (e, searchTerm) => {
    e.preventDefault()
    fetch(`http://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=HJJwJEpiC6h7XUSo3GO35evZ993uhfHl&rating=g`)
    .then(res => res.json())
    .then(data => {
      console.log(data)
      // this.setState({
      //   gifs:
      // })
    })

  }

  render(){
    
    return (
      <div>
        <GifSearch handleSubmit={this.handleSubmit}/>
        <GifList gifs={this.state.gifs} />
      </div>
    )
  }
}