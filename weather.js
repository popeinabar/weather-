//Complete the Weather API Backend part using openweathermap api

// Progression 1: Create a function and fetch data using "fetch" from openweathermap api and display the data as given in reference image.

function getData() {
  const getHeader = document.getElementById('header');
  const getLocation = document.getElementById('location');
  const getCurrent = document.getElementById('current');

  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=Patna&appid=09b242f2ab486e4fee26696f90388209`
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      const result = data;

      const createInputField = document.createElement('input');
      createInputField.setAttribute('type', 'text');
      createInputField.setAttribute('class', 'search');
      createInputField.setAttribute('placeholder', result.name);

      const createLocation = document.createElement('div');
      createLocation.setAttribute('class', 'city');
      createLocation.innerText = result.name + ', ' + result.sys.country;

      const createDate = document.createElement('div');
      createDate.setAttribute('class', 'date');

      const date = new Date();
      let currentDate = `${date}`;
      console.log(currentDate);

      createDate.innerText = currentDate.slice(0, 15);

      const createTemp = document.createElement('div');
      createTemp.setAttribute('class', 'temp');
      let temp = (result.main.temp - 273.15).toFixed(2);

      createTemp.innerText = temp + '°c';

      const createWeather = document.createElement('div');
      createWeather.setAttribute('class', 'weather');
      createWeather.innerText = 'Current Weather: ' + result.weather[0].main;

      const createMinMaxTemp = document.createElement('div');
      createMinMaxTemp.setAttribute('class', 'hi-low');
      createMinMaxTemp.innerText =
        (result.main.temp_max - 273.15).toFixed(2) +
        '°c' +
        ' / ' +
        (result.main.temp_min - 273.15).toFixed(2) +
        '°c';

      getHeader.append(createInputField);

      getLocation.append(createLocation);
      getLocation.append(createDate);

      getCurrent.append(createTemp);
      getCurrent.append(createWeather);
      getCurrent.append(createMinMaxTemp);
    });
}

getData();
