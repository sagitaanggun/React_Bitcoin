import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class navbar extends Component {
  render() {
    return (
        <div>
            <ul className="nav nav-tabs">
                <li className="nav-item">
                    <Link className="nav-link active" aria-expanded="true" to="/">Bitcoin Hari Ini</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" aria-expanded="false" to="/RupiahBit">Rupiah ke Bitcoin</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" aria-expanded="false" to="/BitRupiah">Bitcoin ke Rupiah</Link>
                </li>
            </ul>
        </div>
    );
  }
}
export default navbar;