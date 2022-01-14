const {RESTDataSource} = require('apollo-datasource-rest');

class NasaAPI extends RESTDataSource {
constructor(){
  super();
  this.baseURL = 'https://api.nasa.gov/planetary/'
}
get5Photos(){
  return this.get("/apod?api_key=VhNDVWFGqcblisQD2KI5ecIN3MY8x5m08cB2FQfH&count=5")
}

}


module.exports = NasaAPI;
