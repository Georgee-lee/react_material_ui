import React, { Component } from "react";
import seedColors from "data/seedColors";
import Palette from "Components/Palette";
import { generatePalette } from "./colorHelper";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Palette palette={generatePalette(seedColors[4])} />
      </div>
    );
  }
}

export default App;
