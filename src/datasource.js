const {RESTDataSource} = require('apollo-datasource-rest');

class NasaAPI extends RESTDataSource {
constructor(){
  super();
  this.baseURL = 'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&count=5'
}
get5Photos(){
  return this.get()
}

}


module.exports = NasaAPI;
