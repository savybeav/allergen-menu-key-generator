import React, { Component } from 'react';
import Search from './components/IngredientSearch.jsx';
import Table from './components/AllergenTable.jsx';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: '',
      showComponent: false,
    }
    this.onButtonClick = this.onButtonClick.bind(this);
  }
  // create a function to update the result array using setState and pass this function to the search component
  onButtonClick (input) {
    this.setState({
      result: [input],
      showComponent: true,
    });
  }

  render() {
    return(
      <div id="ingredientSearch">
        <Search update={this.onButtonClick} result={this.state.result} showComponent={this.state.showComponent}/>
        {/* <Result result={this.state.result}/> */}
        <Table />
      </div>
    );
  }
}


// render(<App />, document.querySelector("#app"));

export default App;
