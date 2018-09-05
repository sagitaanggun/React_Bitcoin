import React, { Component } from 'react';
import axios from 'axios';

class bitrupiah extends Component {

  state =
    {
      input: 'Silakan masukkan nominal Bitcoin',
      result: ''
    }

    componentDidMount(){
        axios.get('https://blockchain.info/tobtc?currency=USD&value=500').then((ambilData) => 
        {
          console.log(ambilData.data);
          this.setState({
              process: (500 * 14000) / (ambilData.data)
          })
        })
    };
    masuk()
    {
      let numb = this.refs.angka.value;
      let convert = numb * this.state.process;
      let rounding = convert.toFixed(0)
      this.setState({
          input: "BTC " + numb,
          result: "setara dengan Rp " + rounding
      })
    }

    render() {
    return (
        <div>
            <center style={{marginTop:100}}>
                <h1>Bitcoin ke Rupiah</h1>
                <h3>1 USD = IDR 14000</h3>
                <input ref="angka" type="number" onInput={()=>{this.masuk();}} style={{width:600,height:30}}/><br/><br/>

                {this.state.input} {this.state.result}<br/><br/>
                <div className="text-justify col-md-4 col-md-offset-4">
                    *<b>Catatan:</b> Jika hasil <b>tidak muncul atau NaN</b>, harap untuk <b>di-reload atau tunggu</b> hingga datanya muncul. Anda juga dapat mengeceknya di <b>console</b>, jika sudah muncul datanya di console, maka data akan ter-load hasilnya
                </div>
            </center>
        </div>
    );
  }
}
export default bitrupiah;