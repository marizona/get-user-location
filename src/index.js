import { createRoot } from "react-dom/client";
import { Component } from "react";
import SeasonDisplay from "./SeasonDisplay";
import Loader from "./Loader";
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

class App extends Component {
  state = {
    //state initialized, the only time we do direct assignment
    lat: null,
    errorMessage: "",
  };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat: position.coords.latitude }), //we always update state with setState()
      (err) => this.setState({ errorMessage: err.message })
    );
  }

  //helper function
  renderContent() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    } else if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />;
    } else return <Loader message="Please Accept location Request" />;
  }

  render() {
    return <div>{this.renderContent()}</div>;
  }
}
root.render(<App />);


//