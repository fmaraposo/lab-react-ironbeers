import React from 'react';
import Navbar from './Navbar';
import BeersService from '../utils/api';
import { Link } from 'react-router-dom'; 

class ListBeers extends React.Component {
  state = {
    beers: [],
  };

  componentDidMount() {
    const beersService = new BeersService();
    beersService.getAll().then((response) => {
      console.log(response);
      this.setState({
        beers: response.data,
      });
    });
  }

  handleSearchBeer = (event) => {
    const value = event.target.value;
    const beersService = new BeersService ();
    beersService.searchBeer(value)
    .then((response) => {
      this.setState({
        beers: response.data
      })
    })
  }

  render() {
    return (
      <div>
        <Navbar />
        <h1>List of Beers</h1>
        <form>
          <input onChange={this.handleSearchBeer}></input>
        </form>
        {this.state.beers.map((beer, index) => {
          return (
            <div key={index} className="containerBeers">
              <div className="beerDescription">
                <ul>
                  <li style={{ listStyle: 'none' }}>
                    <h2 style={{ color: '#3DC4FC', fontWeight: 'bold' }}>
                      <Link to={`/beers/${beer._id}`}>{beer.name}</Link>
                    </h2>
                    <img
                      style={{ width: '8%' }}
                      src={beer.image_url}
                      alt="beers"
                    ></img>
                    <h4>{beer.tagline}</h4>
                    <h5>{beer.contributed_by}</h5>
                    <hr></hr>
                  </li>
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default ListBeers;
