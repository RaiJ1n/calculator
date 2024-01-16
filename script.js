let display = document.querySelector('.display');
let buttons = document.querySelectorAll('.buttons');
let specialChars = ['%', '*', '/', '-', '+', '='];
let output = "";

// calculation
const Calculate = (btnvalue) => {
    if (btnvalue === '=' && output !=="") {
        output = eval(output.replace("%" , "/100"))
    }else if (btnvalue === "AC") {
        output = "";
    }else if (btnvalue === "DEL") {
        output = output.toString().slice(0,-1);
    }else{
        if (output === "" && specialChars.includes(btnvalue)) return; {
            output += btnvalue;
        }
    }
    display.value = output
}

// button event listener
buttons.forEach((button) => {

    button.addEventListener('click', (e) => {
        Calculate(e.target.dataset.value);
    })
});



































































