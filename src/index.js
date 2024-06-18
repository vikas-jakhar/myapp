import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();



// $("#volume").slider({
//   min: 0,
//   max: 100,
//   value: 0,
//   range: "min",
//   slide: function (event, ui) {
//     setVolume(ui.value / 100);
//   }
// });

// var myMedia = document.createElement('audio');
// $('#player').append(myMedia);
// myMedia.id = "myMedia";

// playAudio('http://emilcarlsson.se/assets/Avicii%20-%20The%20Nights.mp3', 0);

// function playAudio(fileName, myVolume) {
//   myMedia.src = fileName;
//   myMedia.setAttribute('loop', 'loop');
//   setVolume(myVolume);
//   myMedia.play();
// }

// function setVolume(myVolume) {
//   var myMedia = document.getElementById('myMedia');
//   myMedia.volume = myVolume;
// }
