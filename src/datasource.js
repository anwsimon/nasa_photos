const {RESTDataSource} = require('apollo-datasource-rest');

class NasaAPI extends RESTDataSource {
constructor(){
  super();
  this.baseURL = 'https://api.nasa.gov/planetary/'
}
async get5Photos(){
  const response = await this.get("apod?api_key=VhNDVWFGqcblisQD2KI5ecIN3MY8x5m08cB2FQfH&count=5&thumbs=true");
  console.log("THIS IS RESPONSE", response)

  return {
    title: response.title,
    url: response.url,
    explanation: response.explanation,
    date: response.date,
    media_type: response.media_type
  }
}
}

module.exports = {
  NasaAPI
};
