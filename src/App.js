import React, { Component } from "react";
import "./style/App.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Intro from "./sections/Intro";
import DataPengamatan from "./sections/DataPengamatan";
import GrafikPengamatan from "./sections/GrafikPengamatan";
import DataHasil from "./sections/DataHasil";
import "react-tabs/style/react-tabs.css";
import DataSimulasi from "./sections/DataSimulasi";

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Intro />
        <DataPengamatan />
        <DataSimulasi />
        <DataHasil />
        <GrafikPengamatan />
        <Footer />
      </div>
    );
  }
}
