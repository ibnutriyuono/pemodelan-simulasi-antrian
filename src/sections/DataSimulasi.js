import React, { Component } from "react";
import DataAntarKedatanganPetugas from "./DataAntarKedatanganPetugas";
import DataLamaPencucian from "./DataLamaPencucian";
import DataTujuanAntar from "./DataTujuanAntar";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

class DataSimulasi extends Component {
  render() {
    return (
      <div id="section2">
        <div className="container">
          <h2 align="center">Bilangan Acak dan Variabel yg Dibangkitkan</h2>
          <Tabs defaultIndex={0}>
            <TabList>
              <Tab>Variabel Kedatangan Antar Pelanggan</Tab>
              <Tab>Variabel Lama Penyucian Motor</Tab>
              <Tab>Variabel Tujuan Antar</Tab>
            </TabList>
            <TabPanel>
              <DataAntarKedatanganPetugas />
            </TabPanel>
            <TabPanel>
              <DataLamaPencucian />
            </TabPanel>
            <TabPanel>
              <DataTujuanAntar />
            </TabPanel>
          </Tabs>
        </div>
      </div>
    );
  }
}

export default DataSimulasi;
