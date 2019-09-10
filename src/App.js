import React from 'react';
import logo from './logo.svg';
import FileUpload from '../src/file/fileUpload.component';
import './App.css';

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
        </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
            >
            Learn React
        </a>
          <FileUpload onFileUpload={this.sendFile}>
            <div>Test File Upload Element</div>
          </FileUpload>
        </header>
      </div>
    );
  }

  sendFile = (file) => {
    // Call service to upload the file
  }
}

export default App;
