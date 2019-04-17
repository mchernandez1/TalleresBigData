import React, { Component } from 'react';
import UserList from './UserList';
import UserForm from './UserForm';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      users: [
        {id: 1, name: "RA2", email: ""},
        {id: 2, name: "RA1", email: ""}
      ]
    };
  }

  handleOnAddUser (event) {
    event.preventDefault();
    let user = {
      name: event.target.name.value,
      email: event.target.email.value
    };
    this.setState({
      users: this.state.users.concat([user])
    });
  }

  render() {
    console.log(this.state.users);
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Big Data</h2>
        </div>
        <div>
        <h2>
          Taller 1
        </h2>
        Mauricio Neira 
        <br/>
        Maria Camila Hernández
        <br/>
        William Sanchez

        <h3>RF1</h3>
        <p>Se tomaron franjas horarias de 6 horas. de 12am-6am, 6am-12pm, 12pm-6pm y 6pm - 12am. Esto corresponde a los indices 0,1,2,3 de la columna "Franja horaria" respectivamente. </p>
        <table className="tg">
          <tr>
            <th className="tg-88nc">Tipo taxi</th>
            <th className="tg-88nc">Día de la semana</th>
            <th className="tg-amwm">Franja horaria</th>
            <th className="tg-amwm">Zona</th>
            <th className="tg-amwm">Zona</th>
            <th className="tg-amwm">Cantidad</th>
          </tr>
          <tr>
            <td className="tg-uys7">yellow</td>
            <td className="tg-uys7">0</td>
            <td className="tg-baqh">0</td>
            <td className="tg-baqh">48</td>
            <td className="tg-baqh">Clinton East</td>
            <td className="tg-baqh">51168</td>
          </tr>
          <tr>
            <td className="tg-uys7">yellow</td>
            <td className="tg-uys7">0</td>
            <td className="tg-baqh">1</td>
            <td className="tg-baqh">161</td>
            <td className="tg-baqh">Midtown Center</td>
            <td className="tg-baqh">434096</td>
          </tr>
          <tr>
            <td className="tg-c3ow">yellow</td>
            <td className="tg-c3ow">0</td>
            <td className="tg-baqh">2</td>
            <td className="tg-baqh">236</td>
            <td className="tg-baqh">Upper East Side North</td>
            <td className="tg-baqh">361400</td>
          </tr>
          <tr>
            <td className="tg-c3ow">yellow</td>
            <td className="tg-c3ow">0</td>
            <td className="tg-baqh">3</td>
            <td className="tg-baqh">236</td>
            <td className="tg-baqh">Upper East Side North</td>
            <td className="tg-baqh">262743</td>
          </tr>
          <tr>
            <td className="tg-baqh">yellow</td>
            <td className="tg-baqh">1</td>
            <td className="tg-baqh">0</td>
            <td className="tg-baqh">48</td>
            <td className="tg-baqh">Clinton East</td>
            <td className="tg-baqh">45935</td>
          </tr>
          <tr>
            <td className="tg-baqh">yellow</td>
            <td className="tg-baqh">1</td>
            <td className="tg-baqh">1</td>
            <td className="tg-baqh">161</td>
            <td className="tg-baqh">Midtown Center</td>
            <td className="tg-baqh">502538</td>
          </tr>
          <tr>
            <td className="tg-baqh">yellow</td>
            <td className="tg-baqh">1</td>
            <td className="tg-baqh">2</td>
            <td className="tg-baqh">236</td>
            <td className="tg-baqh">Upper East Side North</td>
            <td className="tg-baqh">389960</td>
          </tr>
          <tr>
            <td className="tg-baqh">yellow</td>
            <td className="tg-baqh">1</td>
            <td className="tg-baqh">3</td>
            <td className="tg-baqh">236</td>
            <td className="tg-baqh">Upper East Side North</td>
            <td className="tg-baqh">305729</td>
          </tr>
          <tr>
            <td className="tg-baqh">yellow</td>
            <td className="tg-baqh">2</td>
            <td className="tg-baqh">0</td>
            <td className="tg-baqh">48</td>
            <td className="tg-baqh">Clinton East</td>
            <td className="tg-baqh">54767</td>
          </tr>
          <tr>
            <td className="tg-baqh">yellow</td>
            <td className="tg-baqh">2</td>
            <td className="tg-baqh">1</td>
            <td className="tg-baqh">161</td>
            <td className="tg-baqh">Midtown Center</td>
            <td className="tg-baqh">520094</td>
          </tr>
          <tr>
            <td className="tg-baqh">yellow</td>
            <td className="tg-baqh">2</td>
            <td className="tg-baqh">2</td>
            <td className="tg-baqh">236</td>
            <td className="tg-baqh">Upper East Side North</td>
            <td className="tg-baqh">392259</td>
          </tr>
          <tr>
            <td className="tg-baqh">yellow</td>
            <td className="tg-baqh">2</td>
            <td className="tg-baqh">3</td>
            <td className="tg-baqh">236</td>
            <td className="tg-baqh">Upper East Side North</td>
            <td className="tg-baqh">316250</td>
          </tr>
          <tr>
            <td className="tg-baqh">yellow</td>
            <td className="tg-baqh">3</td>
            <td className="tg-baqh">0</td>
            <td className="tg-baqh">48</td>
            <td className="tg-baqh">Clinton East</td>
            <td className="tg-baqh">62658</td>
          </tr>
          <tr>
            <td className="tg-baqh">yellow</td>
            <td className="tg-baqh">3</td>
            <td className="tg-baqh">1</td>
            <td className="tg-baqh">161</td>
            <td className="tg-baqh">Midtown Center</td>
            <td className="tg-baqh">516949</td>
          </tr>
          <tr>
            <td className="tg-baqh">yellow</td>
            <td className="tg-baqh">3</td>
            <td className="tg-baqh">2</td>
            <td className="tg-baqh">236</td>
            <td className="tg-baqh">Upper East Side North</td>
            <td className="tg-baqh">385547</td>
          </tr>
          <tr>
            <td className="tg-baqh">yellow</td>
            <td className="tg-baqh">3</td>
            <td className="tg-baqh">3</td>
            <td className="tg-baqh">236</td>
            <td className="tg-baqh">Upper East Side North</td>
            <td className="tg-baqh">312219</td>
          </tr>
          <tr>
            <td className="tg-baqh">yellow</td>
            <td className="tg-baqh">4</td>
            <td className="tg-baqh">0</td>
            <td className="tg-baqh">79</td>
            <td className="tg-baqh">East Village</td>
            <td className="tg-baqh">90534</td>
          </tr>
          <tr>
            <td className="tg-baqh">yellow</td>
            <td className="tg-baqh">4</td>
            <td className="tg-baqh">1</td>
            <td className="tg-baqh">161</td>
            <td className="tg-baqh">Midtown Center</td>
            <td className="tg-baqh">463139</td>
          </tr>
          <tr>
            <td className="tg-baqh">yellow</td>
            <td className="tg-baqh">4</td>
            <td className="tg-baqh">2</td>
            <td className="tg-baqh">236</td>
            <td className="tg-baqh">Upper East Side North</td>
            <td className="tg-baqh">369344</td>
          </tr>
          <tr>
            <td className="tg-baqh">yellow</td>
            <td className="tg-baqh">4</td>
            <td className="tg-baqh">3</td>
            <td className="tg-baqh">79</td>
            <td className="tg-baqh">East Village</td>
            <td className="tg-baqh">362856</td>
          </tr>
          <tr>
            <td className="tg-baqh">yellow</td>
            <td className="tg-baqh">5</td>
            <td className="tg-baqh">0</td>
            <td className="tg-baqh">79</td>
            <td className="tg-baqh">East Village</td>
            <td className="tg-baqh">212429</td>
          </tr>
          <tr>
            <td className="tg-baqh">yellow</td>
            <td className="tg-baqh">5</td>
            <td className="tg-baqh">1</td>
            <td className="tg-baqh">236</td>
            <td className="tg-baqh">Upper East Side North</td>
            <td className="tg-baqh">186229</td>
          </tr>
          <tr>
            <td className="tg-baqh">yellow</td>
            <td className="tg-baqh">5</td>
            <td className="tg-baqh">2</td>
            <td className="tg-baqh">237</td>
            <td className="tg-baqh">Upper East Side South</td>
            <td className="tg-baqh">305044</td>
          </tr>
          <tr>
            <td className="tg-baqh">yellow</td>
            <td className="tg-baqh">5</td>
            <td className="tg-baqh">3</td>
            <td className="tg-baqh">79</td>
            <td className="tg-baqh">East Village</td>
            <td className="tg-baqh">342449</td>
          </tr>
          <tr>
            <td className="tg-baqh">yellow</td>
            <td className="tg-baqh">6</td>
            <td className="tg-baqh">0</td>
            <td className="tg-baqh">79</td>
            <td className="tg-baqh">East Village</td>
            <td className="tg-baqh">225212</td>
          </tr>
          <tr>
            <td className="tg-baqh">yellow</td>
            <td className="tg-baqh">6</td>
            <td className="tg-baqh">1</td>
            <td className="tg-baqh">186</td>
            <td className="tg-baqh">Penn Station/Madison Sq West</td>
            <td className="tg-baqh">168089</td>
          </tr>
          <tr>
            <td className="tg-baqh">yellow</td>
            <td className="tg-baqh">6</td>
            <td className="tg-baqh">2</td>
            <td className="tg-baqh">236</td>
            <td className="tg-baqh">Upper East Side North</td>
            <td className="tg-baqh">274663</td>
          </tr>
          <tr>
            <td className="tg-baqh">yellow</td>
            <td className="tg-baqh">6</td>
            <td className="tg-baqh">3</td>
            <td className="tg-baqh">48</td>
            <td className="tg-baqh">Clinton East</td>
            <td className="tg-baqh">199744</td>
          </tr>
          <tr>
            <td className="tg-baqh">green</td>
            <td className="tg-baqh">0</td>
            <td className="tg-baqh">0</td>
            <td className="tg-baqh">129</td>
            <td className="tg-baqh">Jackson Heights</td>
            <td className="tg-baqh">9968</td>
          </tr>
          <tr>
            <td className="tg-baqh">green</td>
            <td className="tg-baqh">0</td>
            <td className="tg-baqh">1</td>
            <td className="tg-baqh">74</td>
            <td className="tg-baqh">East Harlem North</td>
            <td className="tg-baqh">22783</td>
          </tr>
          <tr>
            <td className="tg-baqh">green</td>
            <td className="tg-baqh">0</td>
            <td className="tg-baqh">2</td>
            <td className="tg-baqh">74</td>
            <td className="tg-baqh">East Harlem North</td>
            <td className="tg-baqh">27567</td>
          </tr>
          <tr>
            <td className="tg-baqh">green</td>
            <td className="tg-baqh">0</td>
            <td className="tg-baqh">3</td>
            <td className="tg-baqh">7</td>
            <td className="tg-baqh">Astoria</td>
            <td className="tg-baqh">22428</td>
          </tr>
          <tr>
            <td className="tg-baqh">green</td>
            <td className="tg-baqh">1</td>
            <td className="tg-baqh">0</td>
            <td className="tg-baqh">129</td>
            <td className="tg-baqh">Jackson Heights</td>
            <td className="tg-baqh">7443</td>
          </tr>
          <tr>
            <td className="tg-baqh">green</td>
            <td className="tg-baqh">1</td>
            <td className="tg-baqh">1</td>
            <td className="tg-baqh">74</td>
            <td className="tg-baqh">East Harlem North</td>
            <td className="tg-baqh">24316</td>
          </tr>
          <tr>
            <td className="tg-baqh">green</td>
            <td className="tg-baqh">1</td>
            <td className="tg-baqh">2</td>
            <td className="tg-baqh">74</td>
            <td className="tg-baqh">East Harlem North</td>
            <td className="tg-baqh">29895</td>
          </tr>
          <tr>
            <td className="tg-baqh">green</td>
            <td className="tg-baqh">1</td>
            <td className="tg-baqh">3</td>
            <td className="tg-baqh">7</td>
            <td className="tg-baqh">Astoria</td>
            <td className="tg-baqh">25146</td>
          </tr>
          <tr>
            <td className="tg-baqh">green</td>
            <td className="tg-baqh">2</td>
            <td className="tg-baqh">0</td>
            <td className="tg-baqh">129</td>
            <td className="tg-baqh">Jackson Heights</td>
            <td className="tg-baqh">8100</td>
          </tr>
          <tr>
            <td className="tg-baqh">green</td>
            <td className="tg-baqh">2</td>
            <td className="tg-baqh">1</td>
            <td className="tg-baqh">74</td>
            <td className="tg-baqh">East Harlem North</td>
            <td className="tg-baqh">24790</td>
          </tr>
          <tr>
            <td className="tg-baqh">green</td>
            <td className="tg-baqh">2</td>
            <td className="tg-baqh">2</td>
            <td className="tg-baqh">74</td>
            <td className="tg-baqh">East Harlem North</td>
            <td className="tg-baqh">30777</td>
          </tr>
          <tr>
            <td className="tg-baqh">green</td>
            <td className="tg-baqh">2</td>
            <td className="tg-baqh">3</td>
            <td className="tg-baqh">42</td>
            <td className="tg-baqh">Central Harlem North</td>
            <td className="tg-baqh">26242</td>
          </tr>
          <tr>
            <td className="tg-baqh">green</td>
            <td className="tg-baqh">3</td>
            <td className="tg-baqh">0</td>
            <td className="tg-baqh">129</td>
            <td className="tg-baqh">Jackson Heights</td>
            <td className="tg-baqh">8783</td>
          </tr>
          <tr>
            <td className="tg-baqh">green</td>
            <td className="tg-baqh">3</td>
            <td className="tg-baqh">1</td>
            <td className="tg-baqh">74</td>
            <td className="tg-baqh">East Harlem North</td>
            <td className="tg-baqh">25451</td>
          </tr>
          <tr>
            <td className="tg-baqh">green</td>
            <td className="tg-baqh">3</td>
            <td className="tg-baqh">2</td>
            <td className="tg-baqh">74</td>
            <td className="tg-baqh">East Harlem North</td>
            <td className="tg-baqh">32901</td>
          </tr>
          <tr>
            <td className="tg-baqh">green</td>
            <td className="tg-baqh">3</td>
            <td className="tg-baqh">3</td>
            <td className="tg-baqh">42</td>
            <td className="tg-baqh">Central Harlem North</td>
            <td className="tg-baqh">28751</td>
          </tr>
          <tr>
            <td className="tg-baqh">green</td>
            <td className="tg-baqh">4</td>
            <td className="tg-baqh">0</td>
            <td className="tg-baqh">129</td>
            <td className="tg-baqh">Jackson Heights</td>
            <td className="tg-baqh">10667</td>
          </tr>
          <tr>
            <td className="tg-baqh">green</td>
            <td className="tg-baqh">4</td>
            <td className="tg-baqh">1</td>
            <td className="tg-baqh">74</td>
            <td className="tg-baqh">East Harlem North</td>
            <td className="tg-baqh">27168</td>
          </tr>
          <tr>
            <td className="tg-baqh">green</td>
            <td className="tg-baqh">4</td>
            <td className="tg-baqh">2</td>
            <td className="tg-baqh">74</td>
            <td className="tg-baqh">East Harlem North</td>
            <td className="tg-baqh">36056</td>
          </tr>
          <tr>
            <td className="tg-baqh">green</td>
            <td className="tg-baqh">4</td>
            <td className="tg-baqh">3</td>
            <td className="tg-baqh">7</td>
            <td className="tg-baqh">Astoria</td>
            <td className="tg-baqh">37660</td>
          </tr>
          <tr>
            <td className="tg-baqh">green</td>
            <td className="tg-baqh">5</td>
            <td className="tg-baqh">0</td>
            <td className="tg-baqh">129</td>
            <td className="tg-baqh">Jackson Heights</td>
            <td className="tg-baqh">22401</td>
          </tr>
          <tr>
            <td className="tg-baqh">green</td>
            <td className="tg-baqh">5</td>
            <td className="tg-baqh">1</td>
            <td className="tg-baqh">74</td>
            <td className="tg-baqh">East Harlem North</td>
            <td className="tg-baqh">17463</td>
          </tr>
          <tr>
            <td className="tg-baqh">green</td>
            <td className="tg-baqh">5</td>
            <td className="tg-baqh">2</td>
            <td className="tg-baqh">41</td>
            <td className="tg-baqh">Central Harlem</td>
            <td className="tg-baqh">31197</td>
          </tr>
          <tr>
            <td className="tg-baqh">green</td>
            <td className="tg-baqh">5</td>
            <td className="tg-baqh">3</td>
            <td className="tg-baqh">7</td>
            <td className="tg-baqh">Astoria</td>
            <td className="tg-baqh">38951</td>
          </tr>
          <tr>
            <td className="tg-baqh">green</td>
            <td className="tg-baqh">6</td>
            <td className="tg-baqh">0</td>
            <td className="tg-baqh">129</td>
            <td className="tg-baqh">Jackson Heights</td>
            <td className="tg-baqh">25336</td>
          </tr>
          <tr>
            <td className="tg-baqh">green</td>
            <td className="tg-baqh">6</td>
            <td className="tg-baqh">1</td>
            <td className="tg-baqh">41</td>
            <td className="tg-baqh">Central Harlem</td>
            <td className="tg-baqh">14807</td>
          </tr>
          <tr>
            <td className="tg-baqh">green</td>
            <td className="tg-baqh">6</td>
            <td className="tg-baqh">2</td>
            <td className="tg-baqh">41</td>
            <td className="tg-baqh">Central Harlem</td>
            <td className="tg-baqh">25503</td>
          </tr>
          <tr>
            <td className="tg-baqh">green</td>
            <td className="tg-baqh">6</td>
            <td className="tg-baqh">3</td>
            <td className="tg-baqh">7</td>
            <td className="tg-baqh">Astoria</td>
            <td className="tg-baqh">27708</td>
          </tr>
          <tr>
            <td className="tg-baqh">fhv</td>
            <td className="tg-baqh">0</td>
            <td className="tg-baqh">0</td>
            <td className="tg-baqh">265</td>
            <td className="tg-baqh">NA</td>
            <td className="tg-baqh">369721</td>
          </tr>
          <tr>
            <td className="tg-baqh">fhv</td>
            <td className="tg-baqh">0</td>
            <td className="tg-baqh">1</td>
            <td className="tg-baqh">265</td>
            <td className="tg-baqh">NA</td>
            <td className="tg-baqh">1084522</td>
          </tr>
          <tr>
            <td className="tg-baqh">fhv</td>
            <td className="tg-baqh">0</td>
            <td className="tg-baqh">2</td>
            <td className="tg-baqh">265</td>
            <td className="tg-baqh">NA</td>
            <td className="tg-baqh">942152</td>
          </tr>
          <tr>
            <td className="tg-baqh">fhv</td>
            <td className="tg-baqh">0</td>
            <td className="tg-baqh">3</td>
            <td className="tg-baqh">265</td>
            <td className="tg-baqh">NA</td>
            <td className="tg-baqh">843179</td>
          </tr>
          <tr>
            <td className="tg-baqh">fhv</td>
            <td className="tg-baqh">1</td>
            <td className="tg-baqh">0</td>
            <td className="tg-baqh">265</td>
            <td className="tg-baqh">NA</td>
            <td className="tg-baqh">305945</td>
          </tr>
          <tr>
            <td className="tg-baqh">fhv</td>
            <td className="tg-baqh">1</td>
            <td className="tg-baqh">1</td>
            <td className="tg-baqh">265</td>
            <td className="tg-baqh">NA</td>
            <td className="tg-baqh">1120376</td>
          </tr>
          <tr>
            <td className="tg-baqh">fhv</td>
            <td className="tg-baqh">1</td>
            <td className="tg-baqh">2</td>
            <td className="tg-baqh">265</td>
            <td className="tg-baqh">NA</td>
            <td className="tg-baqh">979434</td>
          </tr>
          <tr>
            <td className="tg-baqh">fhv</td>
            <td className="tg-baqh">1</td>
            <td className="tg-baqh">3</td>
            <td className="tg-baqh">265</td>
            <td className="tg-baqh">NA</td>
            <td className="tg-baqh">968818</td>
          </tr>
          <tr>
            <td className="tg-baqh">fhv</td>
            <td className="tg-baqh">2</td>
            <td className="tg-baqh">0</td>
            <td className="tg-baqh">265</td>
            <td className="tg-baqh">NA</td>
            <td className="tg-baqh">328148</td>
          </tr>
          <tr>
            <td className="tg-baqh">fhv</td>
            <td className="tg-baqh">2</td>
            <td className="tg-baqh">1</td>
            <td className="tg-baqh">265</td>
            <td className="tg-baqh">NA</td>
            <td className="tg-baqh">1133193</td>
          </tr>
          <tr>
            <td className="tg-baqh">fhv</td>
            <td className="tg-baqh">2</td>
            <td className="tg-baqh">2</td>
            <td className="tg-baqh">265</td>
            <td className="tg-baqh">NA</td>
            <td className="tg-baqh">994373</td>
          </tr>
          <tr>
            <td className="tg-baqh">fhv</td>
            <td className="tg-baqh">2</td>
            <td className="tg-baqh">3</td>
            <td className="tg-baqh">265</td>
            <td className="tg-baqh">NA</td>
            <td className="tg-baqh">1014342</td>
          </tr>
          <tr>
            <td className="tg-baqh">fhv</td>
            <td className="tg-baqh">3</td>
            <td className="tg-baqh">0</td>
            <td className="tg-baqh">265</td>
            <td className="tg-baqh">NA</td>
            <td className="tg-baqh">356369</td>
          </tr>
          <tr>
            <td className="tg-baqh">fhv</td>
            <td className="tg-baqh">3</td>
            <td className="tg-baqh">1</td>
            <td className="tg-baqh">265</td>
            <td className="tg-baqh">NA</td>
            <td className="tg-baqh">1128158</td>
          </tr>
          <tr>
            <td className="tg-baqh">fhv</td>
            <td className="tg-baqh">3</td>
            <td className="tg-baqh">2</td>
            <td className="tg-baqh">265</td>
            <td className="tg-baqh">NA</td>
            <td className="tg-baqh">1012947</td>
          </tr>
          <tr>
            <td className="tg-baqh">fhv</td>
            <td className="tg-baqh">3</td>
            <td className="tg-baqh">3</td>
            <td className="tg-baqh">265</td>
            <td className="tg-baqh">NA</td>
            <td className="tg-baqh">1116587</td>
          </tr>
          <tr>
            <td className="tg-baqh">fhv</td>
            <td className="tg-baqh">4</td>
            <td className="tg-baqh">0</td>
            <td className="tg-baqh">265</td>
            <td className="tg-baqh">NA</td>
            <td className="tg-baqh">442088</td>
          </tr>
          <tr>
            <td className="tg-baqh">fhv</td>
            <td className="tg-baqh">4</td>
            <td className="tg-baqh">1</td>
            <td className="tg-baqh">265</td>
            <td className="tg-baqh">NA</td>
            <td className="tg-baqh">1174026</td>
          </tr>
          <tr>
            <td className="tg-baqh">fhv</td>
            <td className="tg-baqh">4</td>
            <td className="tg-baqh">2</td>
            <td className="tg-baqh">265</td>
            <td className="tg-baqh">NA</td>
            <td className="tg-baqh">1069290</td>
          </tr>
          <tr>
            <td className="tg-baqh">fhv</td>
            <td className="tg-baqh">4</td>
            <td className="tg-baqh">3</td>
            <td className="tg-baqh">265</td>
            <td className="tg-baqh">NA</td>
            <td className="tg-baqh">1071575</td>
          </tr>
          <tr>
            <td className="tg-baqh">fhv</td>
            <td className="tg-baqh">5</td>
            <td className="tg-baqh">0</td>
            <td className="tg-baqh">265</td>
            <td className="tg-baqh">NA</td>
            <td className="tg-baqh">658209</td>
          </tr>
          <tr>
            <td className="tg-baqh">fhv</td>
            <td className="tg-baqh">5</td>
            <td className="tg-baqh">1</td>
            <td className="tg-baqh">265</td>
            <td className="tg-baqh">NA</td>
            <td className="tg-baqh">871410</td>
          </tr>
          <tr>
            <td className="tg-baqh">fhv</td>
            <td className="tg-baqh">5</td>
            <td className="tg-baqh">2</td>
            <td className="tg-baqh">265</td>
            <td className="tg-baqh">NA</td>
            <td className="tg-baqh">962801</td>
          </tr>
          <tr>
            <td className="tg-baqh">fhv</td>
            <td className="tg-baqh">5</td>
            <td className="tg-baqh">3</td>
            <td className="tg-baqh">265</td>
            <td className="tg-baqh">NA</td>
            <td className="tg-baqh">1099106</td>
          </tr>
          <tr>
            <td className="tg-baqh">fhv</td>
            <td className="tg-baqh">6</td>
            <td className="tg-baqh">0</td>
            <td className="tg-baqh">265</td>
            <td className="tg-baqh">NA</td>
            <td className="tg-baqh">740725</td>
          </tr>
          <tr>
            <td className="tg-baqh">fhv</td>
            <td className="tg-baqh">6</td>
            <td className="tg-baqh">1</td>
            <td className="tg-baqh">265</td>
            <td className="tg-baqh">NA</td>
            <td className="tg-baqh">755716</td>
          </tr>
          <tr>
            <td className="tg-baqh">fhv</td>
            <td className="tg-baqh">6</td>
            <td className="tg-baqh">2</td>
            <td className="tg-baqh">265</td>
            <td className="tg-baqh">NA</td>
            <td className="tg-baqh">887103</td>
          </tr>
          <tr>
            <td className="tg-baqh">fhv</td>
            <td className="tg-baqh">6</td>
            <td className="tg-baqh">3</td>
            <td className="tg-baqh">265</td>
            <td className="tg-baqh">NA</td>
            <td className="tg-baqh">809892</td>
          </tr>
        </table>
<br/>
<br/>

<h3>RA1 RA2</h3>
<br/>
<br/>
         <table className="tg">
          <tr>
            <th className="tg-88nc">Punto de atracción</th>
          </tr>
          <tr>
            <td className="tg-uys7">Parque</td>
          </tr>
           <tr>
            <td className="tg-uys7">Jardin</td>
          </tr>
          <tr>
            <td className="tg-uys7">Aeropuerto</td>
          </tr>
          <tr>
            <td className="tg-uys7">Playa</td>
          </tr>
          <tr>
            <td className="tg-uys7">Cemetary</td>
          </tr>
          <tr>
            <td className="tg-uys7">Island</td>
          </tr>
          </table>

<br/>
<br/>
          <p><strong>Ingresa los datos para hacer la búsqueda:</strong></p>
          <UserList users={this.state.users}  />
          <UserForm onAddUser={this.handleOnAddUser.bind(this)} />
<br/>
<br/>
          <table className="tg">
          <tr>
            <th className="tg-88nc">Punto de atracción</th>
            <th className="tg-88nc">Día festivo</th>
            <th className="tg-amwm">Demanda</th>
            <th className="tg-amwm">Total demanda</th>
          </tr>
          <tr>
            <td className="tg-uys7">Parque</td>
            <td className="tg-uys7">Primero Enero</td>
            <td className="tg-baqh">4227</td>
            <td className="tg-baqh">237275</td>
          </tr>
           <tr>
            <td className="tg-uys7">Aeropuerto</td>
            <td className="tg-uys7">Primero Enero</td>
            <td className="tg-baqh">39</td>
            <td className="tg-baqh">237275</td>
          </tr>
          </table>
        </div>
      </div>
    );
  }
}

export default App;