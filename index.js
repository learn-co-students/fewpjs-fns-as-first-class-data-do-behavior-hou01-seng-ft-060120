/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

function greet(timeString) {
  let time = parseInt(timeString.split(":").join(""));

  if (time < 1200) {
    return "Good Morning";
  } else if (time >= 1200 && time <= 1700) {
    return "Good Afternoon";
  } else if (time > 1700) {
    return "Good Evening";
  }
}

function displayMessage(string) {
  const h1 = document.getElementById('greeting');
  h1.innerText = string;
}
