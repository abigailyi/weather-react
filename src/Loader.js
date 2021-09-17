import React from "react";
import Loader from "react-loader-spinner";

export default class App extends React.Component {
  render() {
    return <Loader type="ThreeDots" color="#00BFFF" height={80} width={80} />;
  }
}
