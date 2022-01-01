const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const weekdays = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const deadline = document.querySelector(".deadline");
const counter = document.querySelector(".counter");
const items = document.querySelectorAll("h5 b");

const tempDate = new Date();
const tempYear = tempDate.getFullYear();
const tempMonth = tempDate.getMonth();
const tempDay = tempDate.getDate();

let futureDate = new Date(tempYear, tempMonth, tempDay + 10, 00, 00, 00);
// let futureDate = new Date(2021, 10, 03, 05, 45, 00);

const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const minute = futureDate.getMinutes();

let month = futureDate.getMonth();
month = months[month];

const date = futureDate.getDate();
let weekday = futureDate.getDay();
weekday = weekdays[weekday];

deadline.innerText = `${weekday}, ${date} ${month} ${year}, ${hours}:${minute}AM`;

const futureTime = futureDate.getTime();

const getRemainingTime = () => {
  const today = new Date().getTime();
  const currentTime = futureTime - today;

  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;

  let days = Math.floor(currentTime / oneDay);
  let hours = Math.floor((currentTime % oneDay) / oneHour);
  let minutes = Math.floor((currentTime % oneHour) / oneMinute);
  let seconds = Math.floor((currentTime % oneMinute) / 1000);

  const values = [days, hours, minutes, seconds];

  const format = (item) => {
    if (item < 10) {
      return (item = `0${item}`);
    }
    return item;
  };

  items.forEach((item, index) => {
    item.innerText = format(values[index]);
  });

  if (currentTime < 0) {
    clearInterval(countdown);
    counter.innerHTML = `<h4>This event has been expired</h4>`;
  }
};

let countdown = setInterval(getRemainingTime, 1000);
