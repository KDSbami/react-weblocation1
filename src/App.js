import React, { Component} from 'react'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      latitude: null,
      longitude: null,
    }
  }

  position = async () => {
    var  options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    };
    await navigator.geolocation.getCurrentPosition(
      position => this.setState({ 
        latitude: position.coords.latitude, 
        longitude: position.coords.longitude
      }),
      err => console.log(err),
      options
    );
    //console.log(this.state.latitude)
  }

  render() {
    console.log(this.state.latitude+" "+this.state.longitude)
    var links = "https"+":"+"//"+"www"+"."+"google.com/maps/search/?api=1&query="+this.state.latitude+","+this.state.longitude
     const x = function(){window.open(links, "_blank")}
    return (
      <div>
      <div style={division}>
        <button style={buttons} onClick={this.position} className='Filter'>fetch value</button>
      </div>
      <div style={division}>
        <button style={buttons} onClick={x}>maps</button>
      </div>
      <div style={division}>
        <h2>{this.state.latitude}<br />{this.state.longitude}</h2>
      </div>
      </div>
    );
  }
}
const buttons = {
  display:'flex',
  justifyContent: 'center',
  marginVertical: '10%',
  width: '25%'}
const division ={
  display:'flex',
  justifyContent:'center',
  width:'auto',
  height:'10vH'
}
export default App;