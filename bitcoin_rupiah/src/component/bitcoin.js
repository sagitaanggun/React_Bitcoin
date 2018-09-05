import React, { Component } from 'react';
import axios from 'axios';

class bitcoin extends Component {

state =
    {
        audsell: '',
        audbuy: '',
        eursell: '',
        eurbuy: '',
        gbpsell: '',
        gbpbuy: '',
        jpysell: '',
        jpybuy: '',
        usdsell: '',
        usdbuy: ''
    }

componentDidMount(){
    axios.get('https://blockchain.info/ticker').then((ambilData) => {
        console.log(ambilData);
        this.setState({
            audsell: ambilData.data.AUD.sell,
            audbuy: ambilData.data.AUD.buy,
            eursell: ambilData.data.EUR.sell,
            eurbuy: ambilData.data.EUR.buy,
            gbpsell: ambilData.data.GBP.sell,
            gbpbuy: ambilData.data.GBP.buy,
            jpysell: ambilData.data.JPY.sell,
            jpybuy: ambilData.data.JPY.buy,
            usdsell: ambilData.data.USD.sell,
            usdbuy: ambilData.data.USD.buy
        })
    })
};

render() {
    return (
        <div>
            <div className="col-md-6 col-md-offset-3">
                <div className="panel panel-default" style={{marginTop:80}}>
                    <div className="panel-heading text-center">
                        <h3>
                            <b>Bitcoin Hari Ini</b>
                        </h3>
                    </div>
                    <div className="panel-body">
                        <table className="table table-hover">
                            <thead>
                                <tr>
                                    <th>Mata Uang</th>
                                    <th className="text-center">Harga Jual</th>
                                    <th className="text-center">Harga Beli</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>AUD</td>
                                    <td className="text-center">{this.state.audsell}</td>
                                    <td className="text-center">{this.state.audbuy}</td>
                                </tr>
                                <tr>
                                    <td>EUR</td>
                                    <td className="text-center">{this.state.eursell}</td>
                                    <td className="text-center">{this.state.eurbuy}</td>
                                </tr>
                                <tr>
                                    <td>GBP</td>
                                    <td className="text-center">{this.state.gbpsell}</td>
                                    <td className="text-center">{this.state.gbpbuy}</td>
                                </tr>
                                <tr>
                                    <td>JPY</td>
                                    <td className="text-center">{this.state.jpysell}</td>
                                    <td className="text-center">{this.state.jpybuy}</td>
                                </tr>
                                <tr>
                                    <td>USD</td>
                                    <td className="text-center">{this.state.usdsell}</td>
                                    <td className="text-center">{this.state.usdbuy}</td>
                                </tr>
                            </tbody>
                        </table>
                        <div className="text-justify">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}

export default bitcoin;