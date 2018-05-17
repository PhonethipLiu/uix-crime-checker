import React, { Component } from 'react';
import './App.css';
import MapContainer from './components/MapContainer';
import { Marker } from 'google-maps-react';

class App extends Component {
  getByGeocoords(geoCoords, string){


    return string;
  }
  

  getByCrime(crime, string){

    return string;
  }


  getByTime(time, string){

    return string;
  }


  runApi(){
    //Series of methods for string builders activated here.
    let string, time, crime, geoCoords;


    if(true === (false)){ //conditional for switching....
       string +=` ${this.getByTime(time, string)}`;
       string +=` ${this.getByCrime(crime, string)}`;
       string +=` ${this.getByGeocoords(geoCoords, string)}`;

    }

    // Change the fetch with modified string.

    fetch('https://data.nashville.gov/resource/28i3-48zr.json?block=0',{
      method: "GET",
      data: {
        "$limit" : 5000,
        "$$app_token" : "r1zPUd6qffmC6asW1Y8pPPhuj"
        
      },
      header: {
        "Access-Control-Allow-Origin" : "*"
   }
    }).then((data)=>{
      data.json().then((resolved)=>{
        console.log("Test returned ", resolved);
      });
    
    });

  }
  
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
        </header>

<MapContainer/>

        <p className="App-intro" runapi={this.runApi()}>
         Check console because that's the only place you'll see changes atm. 
        </p>

      </div>
    );
  }
}

export default App;
