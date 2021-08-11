import React, { Component } from 'react';
import Search from './components/IngredientSearch.jsx';

// import Ingredients from '../components/Ingredients';

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <div>
        <Search />
      </div>
    );
  }
}


// render(<App />, document.querySelector("#app"));

export default App;
