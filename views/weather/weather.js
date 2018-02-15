const request = require('request');
const weatherResults=(lag,long,callback)=>{
  request({
    url:`https://api.darksky.net/forecast/7fa261da4fc6cad0aef6384618ce197e/${lag},${long}`,
    json:true
    },
    (error,response,body)=>{
      if (!error &&body.code != 400){
        const temperature = body.currently.temperature;
        const apperntTemperature = body.currently.apparentTemperature;
        const visibility = body.currently.visibility;
        const nearestSotrmDistance = body.currently.nearestStormDistance;
        const year = new Date().getFullYear();
        const month = new Date().getMonth()+1;
        const day = new Date().getDate();
        const hour = new Date().getHours();
        const min = new Date().getMinutes();
        const sec = new Date().getSeconds();
        const icon = body.currently.icon;
        console.log(`${temperature}`);
        // console.log(" (╯°□°）╯︵ ┻━┻");
        // console.log(`The temperature is ${temperature} degrees, for me, it feels like ${apperntTemperature} degrees`);
        // console.log(`the visibility is ${visibility}`);
        // console.log(`the nearest storm is about ${nearestSotrmDistance} miles away`);
        // console.log(`The current date is ${month}/${day}/${year},the time is ${hour}:${min}:${sec}`);
        // console.log(`The weather is ${icon}`);
        // console.log(`The sun is up for ${sunriseTime} seconds! And will set in ${sunsetTime} seconds!`);
        return `hi`;
      }
  else {
        console.log("Unable to fetch temperature");
      }
      return "ih";
  })
}
module.exports={
  weatherResults
}
