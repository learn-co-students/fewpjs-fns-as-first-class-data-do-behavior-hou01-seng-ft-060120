/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */


function greet(time) {
  let current_time = time.split(":");
  let the_time = current_time[0]
  let now = parseInt(the_time, 10)

  if (now < 12)
    return "Good Morning";
  if (now > 17)
    return "Good Evening";
  return "Good Afternoon";
}


/* Write your implementation of displayMessage() */


function displayMessage(greeting) {
  document.getElementById("greeting").innerText = greeting
}