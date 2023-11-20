//Set global variable that would contain the position, velocity, and the HTML element "ball"
const ball = document.getElementById('ball');
var velocity = 100;
var positionX = 0;
var positionY = 0;
var reverse = false;
var messageTimer;

//write a function that can change the position of the HTML element "ball"
function moveBall() {
  var Xmin = 0;
  var Xmax = 300;
  var Ymin = 0;
  var Ymax = 300;
  if (!reverse) {
    positionX += velocity;
    positionY += velocity;
  } else {
    positionX -= velocity;
    positionY -= velocity;
  }

  ball.style.left = positionX + 'px';
  ball.style.top = positionY + 'px';

  if (positionX >= Xmax || positionX <= Xmin || positionY >= Ymax || positionY <= Ymin) {
    reverse = !reverse;
    changeColor();
    changeSize();
    toggleMessage("BOUNCE!")
  }
}

function toggleMessage() {
    var message = document.getElementById('bounceMessage');
  
    if (message) {
      clearTimeout(messageTimer);
      message.style.display = (message.style.display === 'none') ? 'block' : 'none';
      messageTimer = setTimeout(toggleMessage, 150); // Toggle every 500ms (half a second)
    } else {
      showMessage('BOUNCE!'); // Display the message initially
    }
  }
  
  function showMessage(message) {
    var existingMessage = document.getElementById('bounceMessage');
  
    if (existingMessage) {
      clearTimeout(messageTimer);
      document.body.removeChild(existingMessage);
    }
  
    var paragraph = document.createElement('p');
    paragraph.textContent = message;
    paragraph.id = 'bounceMessage'; // Set an ID for the message element
    document.body.appendChild(paragraph);
  
    messageTimer = setTimeout(toggleMessage, 500); // Toggle the message visibility after initial display
  }
  
function changeSize() {
    var randomSize = getRandomSize(); // Get a random size
    ball.style.width = randomSize + 'px';
    ball.style.height = randomSize + 'px';
  }
  
  function getRandomSize() {
    return Math.floor(Math.random() * (150 - 50 + 1)) + 50; // Generate size between 50 and 150 pixels
  }
  
function changeColor() {
    var randomColor = getRandomColor(); // Get a random color
    ball.style.backgroundColor = randomColor;
  }

function getRandomColor() {
    var r = Math.floor(Math.random() * 256); // Random values for red component
    var g = Math.floor(Math.random() * 256); // Random values for green component
    var b = Math.floor(Math.random() * 256); // Random values for blue component
  
    return `rgb(${r},${g},${b})`; // Construct the RGB string
  }

// This calls the moveBall function every 100ms
setInterval(moveBall, 150);
