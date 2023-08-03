import React from 'react';
 
class App extends React.Component {
  state={
    curDT : new Date().toLocaleString(),
  }
  render(){
    return (
      <div className="App">
        <p>Issue Date: {this.state.curDT}</p>
      </div>
    );
  }
}
 
export default App;