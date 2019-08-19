import React, { Component } from "react";
import "rc-slider/assets/index.css";
import "./palette.css";
import ColorBox from "Components/ColorBox";
import Slider, { Range } from "rc-slider";

class Palette extends Component {
  constructor(props) {
    super(props);
    this.state = {
      level: 500
    };
  }

  changeLevel = newLevel => {
    this.setState({
      level: newLevel
    });
  };

  render() {
    const { palette } = this.props;
    const { level } = this.state;

    const colorBoxes = palette.colors[level].map(color => {
      return <ColorBox background={color.hex} name={color.name} />;
    });

    return (
      <div className="Palette">
        <div className="slider">
          <Slider
            defaultValue={level}
            min={100}
            max={900}
            step={100}
            onAfterChange={this.changeLevel}
          />
        </div>
        {/* Navbar Component */}
        <div className="Palette-colors">{colorBoxes}</div>
        {/* footer */}
      </div>
    );
  }
}

export default Palette;
