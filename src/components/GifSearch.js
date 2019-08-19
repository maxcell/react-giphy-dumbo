import React from 'react'
export default class GifSearch extends React.Component { 

  state = {
    searchTerm: ''
  }

  handleChange = (event) => {
    // Change the state of my searchTerm based upon event.target.value
    const { name, value } = event.target
    this.setState({
      [name]: value
      // name = "searchTerm"
    })
  }



  render(){
    return (
      <form onSubmit={(e) => { this.props.handleSubmit(e, this.state.searchTerm) }}>
        <input type="text" name="searchTerm" value={this.state.searchTerm} onChange={this.handleChange} />
        <input type="submit" value="find you some gifs" />
      </form>
    )
  }
}