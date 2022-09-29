const request = require('request');
const breed = process.argv[2];

const url = "https://api.thecatapi.com/v1/breeds/search?q=" + breed;
console.log(url);
request(url, (error, response, body) => {
  if (error) {
    console.log('error: ', error);
    return;
  }

  if (response.statusCode !== 200) {
    console.log("Invalid response", response.statusCode);
    return;
  }

  const data = JSON.parse(body);
  //console.log(data);
  //console.log(typeof data);
  if (data.length === 0) {
    console.log("cat not found", url);
    return;
  }

  console.log(data[0].description);
});
