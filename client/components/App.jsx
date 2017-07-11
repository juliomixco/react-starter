import React from 'react';
export default class App extends React.Component {

  constructor() {
    super();
    this.name = " World!!"
    this.state = { position: 0, step: 1 };
    this.updateLabel = this.updateLabel.bind(this);

  }
  componentDidMount() {
    this.updateLabel();
  }

  render() {
    return (
      <div style={{ textAlign: 'center' }}>
        <h1>Hello {this.name.substring(0, this.state.position)}</h1>
      </div>
    );
  }

  updateLabel() {
    if (this.state.position >= 0 && this.state.position < this.name.length) {
      console.info(this.state.position);
      console.log(this.name.substring(0, this.state.position));
      this.setState({ position: this.state.position + this.state.step })
    } else {
      console.info("step ", this.state.step);
      if (this.state.step > 0) {
        this.setState({ position: this.name.length - 1 });
      } else {
        this.setState({ position: 0 });
      }
      this.setState({ step: this.state.step * -1 });
    }
    setTimeout(this.updateLabel, 300);
  }

}