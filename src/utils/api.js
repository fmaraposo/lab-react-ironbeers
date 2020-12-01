import axios from 'axios';

class BeersService {
  constructor() {
    let service = axios.create({
      baseURL: `${process.env.REACT_APP_CHARACTER_API}`,
    });
    this.service = service;
  }

  getAll() {
    return this.service.get('/');
  }

  getRandom() {
    return this.service.get('/random');
  }

  getBeer(id) {
    return this.service.get(`/${id}`);
  }

  addBeer(beer) {
    return this.service.post('/new', beer);
  }

  searchBeer(query) {
    return this.service.get(`/search?q=${query}`);
  }
}

export default BeersService;
