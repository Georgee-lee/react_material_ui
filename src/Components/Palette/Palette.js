import React, { Component } from "react";
import "./palette.css";
import ColorBox from "Components/ColorBox";

class Palette extends Component {
  render() {
    const colorBoxes = this.props.colors.map(color => {
      return <ColorBox background={color.color} name={color.name} />;
    });

    return (
      <div className="Palette">
        {/* Navbar Component */}
        <div className="Palette-colors">{colorBoxes}</div>
        {/* footer */}
      </div>
    );
  }
}

export default Palette;
