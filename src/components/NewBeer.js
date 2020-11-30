import React from 'react';
import Navbar from './Navbar';
import BeersService from '../utils/api';
import { withRouter } from 'react-router-dom';

class NewBeer extends React.Component {

    state = {
        name: "",
        tagline: "",
        first_brewed: "",
        attenuation_level: "",
        description: "",
        contributed_by: ""
    }

  handleChange = (event) => {
    let { name, value, type } = event.target;

    if (type === 'number') {
      value = event.target.number;
    }

    this.setState({
      [name]: value,
    });
    console.log(this.state.attenuation_level)
    console.log(this.state.name)
  };

 

  handleFormSubmit = (event) => {
    event.preventDefault();
    const beersService = new BeersService();
    beersService.addBeer(this.state)
    .then((response) => {
      console.log(response.config.data);
      console.dir(response.config.data);
      console.log(typeof response.config.data);
      this.props.history.push('/beers');
    });
  };

  render() {
    return (
      <div>
        <Navbar />
        <h1>Create a Beer</h1>
        <div className="containerBeers beerDescription">
          <form onSubmit={this.handleFormSubmit}>
            <div>
              <label>Name: </label>
              <input
                type="text"
                name="name"
                onChange={this.handleChange}
                value={this.state.name}
              />
            </div>
            <div style={{ marginTop: '5px' }}>
              <label>Tagline:</label>
              <input
                type="text"
                name="tagline"
                onChange={this.handleChange}
                value={this.state.tagline}
              />
            </div>
            <div style={{ marginTop: '5px' }}>
              <label>First Brewed:</label>
              <input
                type="text"
                name="first_brewed"
                onChange={this.handleChange}
                value={this.state.first_brewed}
              />
            </div>
            <div style={{ marginTop: '5px' }}>
              <label>Description:</label>
              <input
                type="text"
                name="description"
                onChange={this.handleChange}
                value={this.state.description}
              />
            </div>
            <div style={{ marginTop: '5px' }}>
              <label>Attenuation Level:</label>
              <input
                type="text"
                name="attenuation_level"
                onChange={this.handleChange}
                defaultValue={this.state.attenuation_level}
              />
            </div>
            <div style={{ marginTop: '5px' }}>
              <label>Contributed By:</label>
              <input
                type="text"
                name="contributed_by"
                onChange={this.handleChange}
                value={this.state.contributed_by}
              />
            </div>
            <button type="submit">Create Beer</button>
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(NewBeer);
