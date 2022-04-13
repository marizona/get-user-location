import { createRoot } from "react-dom/client";
import { Component } from "react";
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //state initialized, the only time we do direct assignment
      lat: null,
      errorMessage: "",
    };

    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({ lat: position.coords.latitude }); //we always update state with setState()
      },
      (err) => {
        this.setState({ errorMessage: err.message });
      }
    );
  }
  render() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    } else if (!this.state.errorMessage && this.state.lat) {
      return <div>Latitude: {this.state.lat}</div>;
    } else return <div>Loading!</div>;
  }
}
root.render(<App />);
