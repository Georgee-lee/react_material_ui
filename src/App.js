import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import seedColors from "data/seedColors";
import Palette from "Components/Palette";
import PaletteList from "Components/PaletteList";
import { generatePalette } from "./colorHelper";

class App extends Component {
  findPalette(id) {
    return seedColors.find(palette => {
      return palette.id === id;
    });
  }

  render() {
    return (
      <Switch>
        <Route
          exact
          path="/"
          render={() => <PaletteList palettes={seedColors} />}
        />
        <Route
          exact
          path="/palette/:id"
          render={routeProps => (
            <Palette
              palette={generatePalette(
                this.findPalette(routeProps.match.params.id)
              )}
            />
          )}
        />
      </Switch>
      /* <div className="App">
      <Palette palette={generatePalette(seedColors[4])} />
    </div> */
    );
  }
}

export default App;
