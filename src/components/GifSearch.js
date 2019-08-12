import React, { Component } from 'react'

export default class GifSearch extends Component {
  state = {
    searchTerm: ''
  }

  handleChange = (event) => {
    // I want to handle state changes
    this.setState({
      searchTerm: event.target.value
    })
  }

  render(){
    return (<form onSubmit={e => this.props.handleSubmit(e, this.state.searchTerm)}>
      <input type="text" value={this.state.searchTerm} onChange={this.handleChange} />
      <input type="submit" />
    </form>)
  }
}