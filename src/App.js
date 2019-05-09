import React, { Component } from 'react';
import './style/App.css';
import 'react-tabs/style/react-tabs.css';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Intro from './sections/Intro';
import DataPengamatan from './sections/DataPengamatan';
import GrafikPengamatan from './sections/GrafikPengamatan';
import DataHasil from './sections/DataHasil';
import DataSimulasi from './sections/DataSimulasi';
import LaporanPDF from './sections/LaporanPDF';

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
        <LaporanPDF />
        <Footer />
      </div>
    );
  }
}
