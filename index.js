/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */
function greet(time) {
  let rightMeow = time.split(":");

  if (parseInt(rightMeow[0]) < 12) {
    return "Good Morning"; 
  }
  else if (parseInt(rightMeow[0]) < 17) {
    return "Good Afternoon";
  }
  
  else if  (parseInt(rightMeow[0]) > 17) {
    return "Good Evening";
  }

  else {
    return 
  }
}

function displayMessage(time) {
  const good = document.getElementById('greeting');
  good.innerText = time
}