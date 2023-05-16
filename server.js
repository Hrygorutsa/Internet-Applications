// // function init(){
// //     const container = document.getElementById(container);
// //     console.log(container);
// // }

// // window.addEventListener("DOMContentLoaded",init);

// window.addEventListener("DOMContentLoaded",()=>{
//     const container = document.getElementById("container");
//     for(const item of container.children)
//     {
//         console.log(item);
//     }
//     //console.log();
// }
// );

// function onClicl(e)
// {
//     console.log(e.target.textContent);
// }

// function init(event)
// {
//     console.log(event);
//     const container = document.getElementById('container');
//     for(const itemf of container.children)
//     {
        
//     }
// }

// // Initialize calculator buttons
// function initButtons() {
//     const buttons = document.querySelectorAll('#calculator button');
//     buttons.forEach(button => {
//       button.addEventListener('click', handleClick);
//     });
//   }
  
//   // Handle button click events
//   function handleClick(event) {
//     const button = event.target;
//     const action = button.textContent;
//     if (action === 'AC') {
//       clearCalculator();
//     } else if (action === '=') {
//       calculateResult();
//     } else {
//       updateCalculator(action);
//     }
//   }
  
//   // Clear the calculator
//   function clearCalculator() {
//     const result = document.querySelector('#result');
//     result.textContent = '0';
//     delete lastAction;
//     delete lastValue;
//   }
  
//   // Update the calculator display
//   function updateCalculator(action) {
//     const result = document.querySelector('#result');
//     if (result.textContent === '0' && action !== '.') {
//       result.textContent = '';
//     }
//     result.textContent += action;
//   }
  
//   // Calculate and display the result
//   function calculateResult() {
//     const result = document.querySelector('#result');
//     const expression = result.textContent;
//     result.textContent = eval(expression);
//   }
  
//   // Initialize the calculator on page load
//   window.addEventListener('DOMContentLoaded', () => {
//     initButtons();
//   });
  
// // Initialize calculator buttons
// function initButtons() {
//   const buttons = Array.from(document.querySelectorAll('#calculator button'));
//   buttons.forEach(button => {
//     button.addEventListener('click', handleClick);
//   });
// }

// // Handle button click events
// function handleClick(event) {
//   const button = event.target;
//   const action = button.textContent;
//   if (action === 'AC') {
//     clearCalculator();
//   } else if (action === '=') {
//     calculateResult();
//   } else {
//     updateCalculator(action);
//   }
// }

// // Clear the calculator
// function clearCalculator() {
//   console.log('Clearing the calculator...');
//   // Add your logic to clear the calculator here
// }

// // Update the calculator display
// function updateCalculator(action) {
//   console.log(`Updating calculator with action: ${action}`);
//   // Add your logic to update the calculator display here
// }

// // Calculate and display the result
// function calculateResult() {
//   console.log('Calculating the result...');
//   // Add your logic to calculate and display the result here
// }

// // Initialize the calculator
// function initCalculator() {
//   initButtons();
// }

// // Run the calculator
// initCalculator();


const express = require('express');
const app = express();

// Set up the Express.js server
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname));

// Define the route for the calculator page
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// Handle the calculator form submission
app.post('/calculate', (req, res) => {
  const { num1, num2, operator } = req.body;

  let result;
  switch (operator) {
    case '+':
      result = parseFloat(num1) + parseFloat(num2);
      break;
    case '-':
      result = parseFloat(num1) - parseFloat(num2);
      break;
    case '*':
      result = parseFloat(num1) * parseFloat(num2);
      break;
    case '/':
      result = parseFloat(num1) / parseFloat(num2);
      break;
    default:
      result = 'Invalid operator';
  }

  res.send(`Result: ${result}`);
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
