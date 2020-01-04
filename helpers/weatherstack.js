const request = require('request');


let getCurrentWByLocation = (location) => {

  return new Promise(function(resolve,reject){


    let options = {
      url: `http://api.weatherstack.com/current?access_key=690dd549591e78872bea4a359b4741e9&query=${location}`,

    };

    request(options, function(error, response, body) {
      if (JSON.parse(body).error) {
        console.log('--------Error? really?!');
        reject(error)

      } else {
        var data = JSON.parse(body);

          var obj={}
          obj.city = data.location.name
          obj.country = data.location.country
          obj.time= data.current.observation_time
          obj.temperature= data.current.temperature
          obj.icon= data.current.weather_icons[0]
          obj.description= data.current.weather_descriptions[0]
          obj.pressure= data.current.pressure
          obj.humidity= data.current.humidity
        resolve(obj)
      }


  })

  })

}
module.exports.getCurrentWByLocation = getCurrentWByLocation;