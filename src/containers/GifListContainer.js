import React from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

// You can change this key if you want
// But it may break if a bunch of y'all use it
const apiKey = "HJJwJEpiC6h7XUSo3GO35evZ993uhfHl"
export default class GifListContainer extends React.Component {

  state = {
    gifs: [] // Initially, I will have no gifs
  }
  // Data Fetching inside of React
  // Render in two phases
  // 1. First time around is rendering a blank list
  // 2. Second time is a fetch request in componentDidMount (re-render -> setState)

  // We realized we didn't need to use a componentDidMount because we only fetch when we
  // click submit
  // componentDidMount(){
  //   fetch("http://api.giphy.com/v1/gifs/search?q=YOUR QUERY HERE&api_key=dc6zaTOxFJmzC&rating=g")
  // }

  // We'll define a function for submission next to the state we're trying to change
  // But execute it elsewhere

  handleSubmit = (e, searchTerm) => {
    e.preventDefault()
    fetch(`http://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=${apiKey}&rating=g`)
    .then(res => res.json())
    .then(data => {
      /********* PART WAS ADDED AFTER LECTURE *********/
      // Took data from the fetch and converted it to just the data we care about
      // You could change it to whatever you want
      // *** MAKE SURE TO ACCESS THE KEY IN THE OBJECT CALLED "data"
      // Because the requirement said to only give the first three, I just access only the three
      const firstThree = data.data
                          .slice(0,3)
                          .map(({id, title, images}) => {
                            return {id: id, title: title, url: images.original.url}
                          })

      this.setState({
        gifs: firstThree
      })
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