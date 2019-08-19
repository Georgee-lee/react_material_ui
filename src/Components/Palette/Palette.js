import React, { Component } from "react";
import "./palette.css";
import ColorBox from "Components/ColorBox";
import Navbar from "Components/Navbar";

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
        <Navbar level={level} changeLevel={this.changeLevel} />
        <div className="Palette-colors">{colorBoxes}</div>
        {/* footer */}
      </div>
    );
  }
}

export default Palette;
