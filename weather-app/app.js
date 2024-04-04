const req = require('request');
const url = 'http://api.weatherstack.com/current?access_key=4d30bf91ede098154f763156ed3b5b43&query=22.5726,88.3639';

req({url}, (error,response) =>{
    //console.log(response);
    const data = JSON.parse(response.body);
    console.log(data);
})