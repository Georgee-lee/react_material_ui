import React, { Component } from "react";
import CopyToClipBoard from "react-copy-to-clipboard";
import "./colorbox.css";

class ColorBox extends Component {
  constructor(props) {
    super(props);
    this.state = { copied: false };
  }

  changeCopyState = () => {
    this.setState({ copied: true }, () => {
      setTimeout(() => this.setState({ copied: false }), 800);
    });
  };

  render() {
    const { name, background } = this.props;
    const { copied } = this.state;

    return (
      <CopyToClipBoard text={background} onCopy={this.changeCopyState}>
        <div className="ColorBox" style={{ background }}>
          {/* copy-container를 transform으로 커지게 하면 글자들도 다 커짐... */}
          <div className={`copy-overlay ${copied && "show"}`} style={{ background }} />
          <div className={`copy-message ${copied && "show"}`}>
            <h1>copied!</h1>
            <p>{this.props.background}</p>
          </div>
          <div className="copy-container">
            <div className="box-content">
              <span>{name}</span>
            </div>
            <button className="copy-button">Copy</button>
          </div>
          <span className="see-more">More</span>
        </div>
      </CopyToClipBoard>
    );
  }
}

export default ColorBox;
