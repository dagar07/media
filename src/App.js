import React from 'react';
import './App.css';

function App() {

  const handleTheElementClick = () => {
    fetch(
      '/angel.gif?interaction=UserEve&client=ad_media&os_name=macos&x1=google&x2=email&x3=pdfconvert&landing_url=abcd1'
    ).then((res) => res)
    .then((res) => {
      console.log(res)
    })
  }

  return (
    <div className="App" onClick={handleTheElementClick}>
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
    </div>
  );
}

export default App;
