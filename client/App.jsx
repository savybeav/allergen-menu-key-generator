import React, { Component } from 'react';
import Search from './components/IngredientSearch.jsx';
import Result from './components/resultsDisplay.jsx';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: ['testing 123'],
      // create a function to update the result array using setState and pass this function to the search component
      updateResult: (keys) => this.setState({result: [keys]}),
    }
   }

  render() {
    return(
      <div>
        <Search update={this.state.updateResult} result={this.state.result}/>
        <Result result={this.state.result}/>
      </div>
    );
  }
}


// render(<App />, document.querySelector("#app"));

export default App;
