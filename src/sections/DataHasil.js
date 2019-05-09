import React, { Component } from "react";

let dataTabelSimulasi = require("../data/dataTabelSimulasi.json");
class DataHasil extends Component {
  constructor(props) {
    super(props);
    this.state = {
      E: [null],
      G: [null],
      H: [null],
      K: [null],
      L: [null],
      M: [null],
      N: [null]
    };
  }

  componentDidMount() {
    this.kumulatif();
    this.waktuPersiapan();
    this.waktuSelesai();
    this.totalWaktu();
    this.petugas();
  }

  kumulatif = () => {
    let hasil = 0;
    for (let i = 0; i < 25; i++) {
      hasil = hasil + Number(localStorage.getItem("D" + (i + 1).toString()));
      let list = Array.from(this.state.E);
      this.state.E.push(hasil);
      this.setState({ list });
    }
  };

  waktuPersiapan = () => {
    for (let i = 0; i < 25; i++) {
      let list = Array.from(this.state.G);
      this.state.G.push(1);
      this.setState({ list });
    }
  };

  waktuSelesai = () => {
    const { E, G, H } = this.state;
    for (let i = 1; i <= 25; i++) {
      let hasil =
        E[i] + G[i] + Number(localStorage.getItem("F" + i.toString()));
      let list = Array.from(H);
      H.push(hasil);
      this.setState({ list });
    }
  };

  totalWaktu = () => {
    const { H, K } = this.state;
    for (let i = 1; i <= 25; i++) {
      let hasil = H[i] + Number(localStorage.getItem("J" + i.toString()));
      let list = Array.from(K);
      K.push(hasil);
      this.setState({ list });
    }
  };

  petugas = () => {
    Array.prototype.ganti = function(index, item) {
      this.splice(index, 1, item);
    };
    const { H, K, L, M, N } = this.state;
    let ptgs = [];
    let dataH = Array.from(H);
    let dataK = Array.from(K);
    let dataL = Array.from(L);
    let dataM = Array.from(M);
    let dataN = Array.from(N);
    for (let i = 1; i <= 25; i++) {
      if (i < 5) {
        ptgs.push(dataK[i]);

        L.push(i);
        M.push(null);
        N.push(null);
        this.setState({ dataL });
        this.setState({ dataM });
        this.setState({ dataN });
      } else {
        let min = Math.min.apply(null, ptgs);
        let inx = ptgs.indexOf(min);

        let hasil = min - dataH[i];

        if (hasil < 0) {
          N.push(Math.abs(hasil));
          M.push(null);
          this.setState({ dataM });
          this.setState({ dataN });
        } else {
          M.push(hasil);
          N.push(null);
          this.setState({ dataM });
          this.setState({ dataN });
        }

        ptgs.ganti(inx, dataK[i]);

        L.push(ptgs.indexOf(dataK[i]) + 1);
        this.setState({ dataL });
      }
    }
  };

  render() {
    const { E, G, H, K, L, M, N } = this.state;

    return (
      <div className="fixed_header pad tablecontainer">
        <h6 align="left">
          <b>>> Tabel Simulasi</b>
        </h6>
        <table>
          <thead>
            <tr>
              <td rowSpan={3} className="center">
                No
              </td>
              <td colSpan={3} className="center">
                Bilangan acak yang dibangkitkan
              </td>
              <td colSpan={11} className="center">
                Simulasi
              </td>
            </tr>
            <tr>
              <td className="center">Antar kedatangan pelanggan</td>
              <td className="center">Lama Cuci</td>
              <td className="center">Tujuan antar</td>
              <td className="center">Antar kedatangan pelanggan (menit)</td>
              <td className="center">Kumulatif kedatangan pelanggan (menit)</td>
              <td className="center">Lama cuci (menit)</td>
              <td className="center">Waktu persiapan antar (menit)</td>
              <td className="center">Waktu selesai dilayani (menit)</td>
              <td className="center">Tujuan antar</td>
              <td className="center">Waktu tempuh (menit)</td>
              <td className="center">Total waktu pelayanan</td>
              <td className="center">Petugas pengantar</td>
              <td className="center">Waktu menunggu pelanggan (menit)</td>
              <td className="center">Waktu menunggu petugas (menit)</td>
            </tr>
            <tr>
              <td className="center">A</td>
              <td className="center">B</td>
              <td className="center">C</td>
              <td className="center">D</td>
              <td className="center">E</td>
              <td className="center">F</td>
              <td className="center">G</td>
              <td className="center">H</td>
              <td className="center">I</td>
              <td className="center">J</td>
              <td className="center">K</td>
              <td className="center">L</td>
              <td className="center">M</td>
              <td className="center">N</td>
            </tr>
          </thead>
          <tbody>
            {dataTabelSimulasi.map((data, i) => {
              return (
                <tr key={i}>
                  <td className="center">{data.i}</td>
                  <td className="center">
                    {localStorage.getItem("A" + i.toString())}
                  </td>
                  <td className="center">
                    {localStorage.getItem("B" + i.toString())}
                  </td>
                  <td className="center">
                    {localStorage.getItem("C" + i.toString())}
                  </td>
                  <td className="center">
                    {localStorage.getItem("D" + i.toString())}
                  </td>
                  <td className="center">{E[i]}</td>
                  <td className="center">
                    {localStorage.getItem("F" + i.toString())}
                  </td>
                  <td className="center">{G[i]}</td>
                  <td className="center">{H[i]}</td>
                  <td className="center">
                    {localStorage.getItem("I" + i.toString())}
                  </td>
                  <td className="center">
                    {localStorage.getItem("J" + i.toString())}
                  </td>
                  <td className="center">{K[i]}</td>
                  <td className="center">{L[i]}</td>
                  <td className="center">{M[i]}</td>
                  <td className="center">{N[i]}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default DataHasil;
