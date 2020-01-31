import React, {Component} from 'react'
import './App.css'
import data from './Data'
import List from './List'
import Header from './Header'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
        data: data,
        index: 0
    }

  }

  handleNext() {
    this.setState({
      index: this.state.index + 1
    })
  }

  handlePrevious() {
    this.setState({
      index: this.state.index -1
    })
  }

  render() {
   
   
    return(
    <div className="App">
    <body>
      <Header />
      <div className="middle-section">
      <List person={this.state.data[this.state.index]}/>
      </div>  
        <div className="bottom-section">
      <div className="control-box">
          <button className="previous-button" onClick={() => this.handlePrevious()}>&lt;Previous</button>
        <div className="edit-box">
          <button className="edit-button">Edit</button>
          <button className="delete-button">Delete</button>
          <button className="new-button">New</button>
        </div>  
          <button className="next-button" onClick={() => this.handleNext()}>Next&gt;</button>
          </div>
      </div>
      </body>
    </div>
    )
  }
}


export default App;
