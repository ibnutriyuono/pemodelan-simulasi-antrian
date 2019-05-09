import React, { Component } from 'react';
import GrafikDoughnut from '../components/GrafikDoughnut';
import GrafikBar from '../components/GrafikBar';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

let dataArea = require('../data/dataArea.json');
let dataTabelSimulasi = require('../data/dataTabelSimulasi.json');

export default class GrafikPengamatan extends Component {
  render() {
    let labelArea = dataArea.map(data => {
      return data.wilayah;
    });
    let dataAreaProps = dataArea.map(data => {
      return data.durasi;
    });
    let labelTabel = dataTabelSimulasi.map(data => {
      return data.i;
    });
    let dataTabel = dataTabelSimulasi.map(data => {
      return data.totalWaktu;
    });

    return (
      <div id="section3" className="container">
        <h1 align="center">Grafik Pengamatan</h1>
        <Tabs defaultIndex={0} onSelect={index => console.log(index)}>
          <TabList>
            <Tab>Grafik Frekuensi Tujuan Antar</Tab>
            <Tab>Grafik Total Waktu Pelayanan</Tab>
          </TabList>
          <TabPanel>
            <GrafikDoughnut judul={'Grafik Frekuensi Tujuan Antar'} labelArea={labelArea} dataArea={dataAreaProps} />
          </TabPanel>
          <TabPanel>
            <GrafikBar
              judul={'Grafik Total Waktu Pelayanan'}
              labelGraph={'Total Waktu Pelayanan dalam Menit'}
              labelArea={labelTabel}
              dataArea={dataTabel}
            />
          </TabPanel>
        </Tabs>
      </div>
    );
  }
}
