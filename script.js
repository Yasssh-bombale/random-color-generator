//* to create an random color we need to understand hexcode ; hexcode contains digits from 0 to 9 and alphabets from A to F;

const hex = "0123456789ABCDEF";
let color = "#";

//FIXME: we need to get an randome values from hex[] hence we have to create randome number ;

//? hexCode contains 6 values hence terminating condition will be i<6;

const colorGenerator = () => {
  color = "#";
  for (let i = 0; i < 6; i++) {
    color = color + hex[Math.floor(Math.random() * 16)];
  }
  // console.log(color);
  return color;
};
// --------------------------------------------------------->>
const start = document.querySelector("#start");
const stopp = document.querySelector("#stop");
// -------------------------------------------------------------<<
let intervalInstance;
const startChangingColor = () => {
  if (!intervalInstance) {
    intervalInstance = setInterval(changeColor, 1000);
  }
  function changeColor() {
    document.body.style.backgroundColor = colorGenerator();
    start.setAttribute("disabled", "");
  }
};
const stopChangingColor = () => {
  clearInterval(intervalInstance);
  intervalInstance = null; //-------> Optimization
  start.removeAttribute("disabled");
  console.log("interval has been stopped !");
};

start.addEventListener("click", startChangingColor);
stopp.addEventListener("click", stopChangingColor);
