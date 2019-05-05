import React, { Component } from 'react';
import './style/App.css';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Intro from './sections/Intro';
import DataPengamatan from './sections/DataPengamatan';
import GrafikPengamatan from './sections/GrafikPengamatan';
import DataHasil from './sections/DataHasil';
import DataAntarKedatanganPetugas from './sections/DataAntarKedatanganPetugas';

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Intro />
        <DataPengamatan />
        <DataAntarKedatanganPetugas />
        <DataHasil />
        <GrafikPengamatan />
        <Footer />
      </div>
    );
  }
}
