import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

let dataPengamatan = require("../data/dataPengamatan.json");
let dataLamaPenyucian = require("../data/dataLamaPenyucian.json");
let dataArea = require("../data/dataArea.json");

export default class DataPengamatan extends Component {
  render() {
    return (
      <div>
        <div id="section1">
          <div className="container">
            <h2 align="center">Data Hasil Pengamatan</h2>
            <Tabs defaultIndex={0} onSelect={index => console.log(index)}>
              <TabList>
                <Tab>Data Kedatangan Antar Pelanggan</Tab>
                <Tab>Data Lama Penyucian Motor</Tab>
                <Tab>Data Area Tujuan</Tab>
              </TabList>
              <TabPanel>
                <div className="tablecontainer">
                  <p>
                    <b>Tabel Data Kedatangan Antar Pelanggan</b>
                  </p>
                  <table>
                    <thead>
                      <tr>
                        <th>No</th>
                        <th>Kelas Interval</th>
                        <th>Frekuensi</th>
                      </tr>
                    </thead>

                    <tbody>
                      {dataPengamatan.map((data, i) => {
                        return (
                          <tr key={i}>
                            <td>{data.nomor}</td>
                            <td>
                              {data.batasBawah} - {data.batasAtas}
                            </td>
                            <td>{data.frekuensi}</td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                  <p>Rata-rata (&#181;) = 8.3</p>
                  <p>Simpangan Baku(&sigma;) = 4.076</p>
                </div>
              </TabPanel>
              <TabPanel>
                <div className="tablecontainer">
                  <p>
                    <b>Data Lama Penyucian Motor</b>
                  </p>
                  <table>
                    <thead>
                      <tr>
                        <th>No</th>
                        <th>Kelas Interval</th>
                        <th>Frekuensi</th>
                      </tr>
                    </thead>

                    <tbody>
                      {dataLamaPenyucian.map((data, i) => {
                        return (
                          <tr key={i}>
                            <td>{data.nomor}</td>
                            <td>
                              {data.batasBawah} - {data.batasAtas}
                            </td>
                            <td>{data.frekuensi}</td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                  <p>Rata-rata (&#181;) = 21.7</p>
                  <p>Simpangan Baku(&sigma;) = 14.254</p>
                </div>
              </TabPanel>
              <TabPanel>
                <div className="tablecontainer">
                  <p>
                    <b>Data Area Tujuan</b>
                  </p>
                  <table>
                    <thead>
                      <tr>
                        <th>No</th>
                        <th>Wilayah</th>
                        <th>Durasi (menit)</th>
                      </tr>
                    </thead>

                    <tbody>
                      {dataArea.map((data, i) => {
                        return (
                          <tr key={i}>
                            <td>{data.nomor}</td>
                            <td>{data.wilayah}</td>
                            <td>{data.durasi}</td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </TabPanel>
            </Tabs>
          </div>
        </div>
      </div>
    );
  }
}
