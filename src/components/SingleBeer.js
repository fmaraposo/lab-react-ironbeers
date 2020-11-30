import React from 'react';
import Navbar from './Navbar';
import BeersService from '../utils/api';

class SingleBeer extends React.Component {
  state = {
    image: '',
    name: '',
    tagline: '',
    firstBrewed: '',
    attenuationLevel: 0,
    description: '',
    contributedBy: '',
  };

  componentDidMount() {
    const beerService = new BeersService();
    const beerId = this.props.match.params.id;
    beerService.getBeer(beerId).then((response) => {
      console.log(response);
      this.setState({
        image: response.data.image_url,
        name: response.data.name,
        tagline: response.data.tagline,
        firstBrewed: response.data.first_brewed,
        attenuationLevel: response.data.attenuation_level,
        description: response.data.description,
        contributedBy: response.data.contributed_by,
      });
    });
  }

  render() {
    return (
      <div>
        <Navbar />
        <h1>Single Beer</h1>
        <div className="containerBeers beerDescription">
          <h2>{this.state.name}</h2>
          <img style={{width: "10%"}} src={this.state.image} alt="singleBeer"></img>
          <h3>{this.state.tagline}</h3>
          <p style={{fontWeight: "bold"}}>{this.state.firstBrewed}</p>
          <p style={{fontWeight: "bold", fontSize: "10px"}}>{this.state.description}</p>
          <h4>{this.state.contributedBy}</h4>
        </div>
      </div>
    );
  }
}

export default SingleBeer;
