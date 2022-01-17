const {RESTDataSource} = require('apollo-datasource-rest');

class NasaAPI extends RESTDataSource {
constructor(){
  super();
  this.baseURL = 'https://api.nasa.gov/planetary/'
}
async get5Photos(){
  const response = await this.get("apod?api_key=VhNDVWFGqcblisQD2KI5ecIN3MY8x5m08cB2FQfH&count=5");
  console.log("THIS IS RESPONSE", response)
  // return response.map(photo => console.log("THIS IS PHOTO", photo))
  return response
}
}

module.exports = NasaAPI;
