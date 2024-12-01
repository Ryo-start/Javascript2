const buttons = document.querySelectorAll('input[type="button"]');
const display = document.querySelector('.display');

let concutext = "";

function buttonpressed(event) {
    const value = event.target.value;  // `event.target` でクリックされたボタンを取得
    if (value === "="){
        concutext = eval(concutext); 
    }  
    else if (value === "AC") {
        concutext = "";
    }
    else {
        concutext += value; 
    }
    display.value = concutext;
}

buttons.forEach(button => {
    button.addEventListener('click', buttonpressed);
});
