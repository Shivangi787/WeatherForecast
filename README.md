# WeatherForecast
A Weather forecast React Application has been created by incorporating React Hooks and Fetch API. All the states are managed by useState Hook. Location's latitude 
and Logitude are taken which varies from user's location and depending on that Weather information has been given like humidity, temperature, sunrise and sunset.

In App.js file, weather data is getting fetched using FETCH api and passed as a prop to the Weather.js component. useState is used to manage the state and useEffect hook is 
to re-render the Weather.js if latitude and longitude are changed as these are the states. 
