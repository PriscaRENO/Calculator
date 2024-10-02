// Retrieve all buttons
const buttons = [...document.querySelectorAll('button')];
console.log(buttons);

// Retrieve the class "screen" to display the values
const screen = document.querySelector('.screen');

// Create a new array from the "buttons" array containing the values of the buttons (data-key)
const listEventKey = buttons.map(button => button.dataset.key);
console.log(listEventKey);

// Event listener on mouse click
document.addEventListener('click', (e) => {
    const value = e.target.dataset.key;
    console.log(typeof value);
    calculate(value);
});

// Event listener on the keyboard
document.addEventListener('keydown', (e) => {
    const value = e.key;
    console.log(value);
    calculate(value);
});

// Variable to check if a result is displayed
let isResultDisplayed = false;

// Function to calculate the result
const calculate = (value) => {
    if (listEventKey.includes(value)) {
       switch (value) {
           case 'Backspace':
               screen.textContent = '';
               isResultDisplayed = false;
               break;
           case '=':
               const result = eval(screen.textContent);
                screen.textContent = result;
                isResultDisplayed = true;
                break;
             default:
               if (isResultDisplayed) {
                screen.textContent = '';
                isResultDisplayed = false; 
                const indexEventKey = listEventKey.indexOf(value);
                const key = buttons[indexEventKey];
                 screen.textContent += key.textContent;
                }
        }
    }
}

// Event listener on the window to catch errors
window.addEventListener('error', (e) => {
    alert('Une erreur est survenue dans votre calcul : ' + e.message);
});