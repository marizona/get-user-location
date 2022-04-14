import { createRoot } from "react-dom/client";
import { Component } from "react";
import SeasonDisplay from "./SeasonDisplay";
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
  
  render() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    } else if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat}/>
    } else return <div>Loading!</div>;
  }
}
root.render(<App />);
