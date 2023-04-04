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

// Initialize calculator buttons
function initButtons() {
    const buttons = document.querySelectorAll('#calculator button');
    buttons.forEach(button => {
      button.addEventListener('click', handleClick);
    });
  }
  
  // Handle button click events
  function handleClick(event) {
    const button = event.target;
    const action = button.textContent;
    if (action === 'AC') {
      clearCalculator();
    } else if (action === '=') {
      calculateResult();
    } else {
      updateCalculator(action);
    }
  }
  
  // Clear the calculator
  function clearCalculator() {
    const result = document.querySelector('#result');
    result.textContent = '0';
    delete lastAction;
    delete lastValue;
  }
  
  // Update the calculator display
  function updateCalculator(action) {
    const result = document.querySelector('#result');
    if (result.textContent === '0' && action !== '.') {
      result.textContent = '';
    }
    result.textContent += action;
  }
  
  // Calculate and display the result
  function calculateResult() {
    const result = document.querySelector('#result');
    const expression = result.textContent;
    result.textContent = eval(expression);
  }
  
  // Initialize the calculator on page load
  window.addEventListener('DOMContentLoaded', () => {
    initButtons();
  });
  