import React, { Component } from 'react';
import './App.css';

class App extends Component {

  state = {
    reqSrc: '/media/angel.gif?interaction=UserEve&client=ad_media&os_name=macos&x1=google&x2=email&x3=pdfconvert&landing_url=abcd1'
  }

  handleTheElementClick = () => {
    fetch(
      '/media/angel.gif?interaction=UserEve&client=ad_media&os_name=macos&x1=google&x2=email&x3=pdfconvert&landing_url=abcd1'
    ).then((res) => res)
    .then((res) => {
      this.setState({
        resSrc: res.url
      })
    })
  }

  render () {
    const { reqSrc, resSrc } = this.state
    return (
      <div className="App" onClick={this.handleTheElementClick}>
        <header className="App-header">
          <div>
            Request from server
            <img src={reqSrc} alt='' />
            <span>{reqSrc}</span>
          </div>
          <br/><br/><br/>
          <div>
            Response from server
            <img src={resSrc} alt='' />
            <span>{resSrc}</span>
          </div>
        </header>
      </div>
    )
  }
}

export default App
