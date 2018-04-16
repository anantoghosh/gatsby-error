import React from 'react'

class ProgressMeter extends React.Component {
  constructor(props) {
    super(props)
    this.pages = this.props.pages
    this.currentPage = this.props.currentPage
  }


  render() {
    console.log('rendering');
    let pagesList = []
    for (let i = 0; i < this.pages; i++) {
      pagesList.push(<li key={i} onClick={() => this.props.scroll(i)}>Page {i}</li>)
    }
    console.log(pagesList)

  return (<ul>{pagesList}</ul>);
  }
}

export default ProgressMeter
