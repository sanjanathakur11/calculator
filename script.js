const screen = document.querySelector("#screen");
const equal = document.querySelector("#equal");
let a, b, toDo;

let maths = {
    '+': (x, y) => x + y,
    '-': (x, y) => x - y,
    'x': (x, y) => x * y,
    '÷': (x, y) => (y === 0) ? "Idiot! A number can't be divided by 0" : Math.round(1000 * x / y) / 1000,
    '%': (x, y) => x % y
}

function firstNum() {
    a = Number(screen.textContent);
}

function secondNum() {
    b = Number(screen.textContent);
}

document.querySelectorAll(".numbers").forEach( num => {
    num.addEventListener("click", (event) => {
        let target = event.target;
        screen.textContent += target.textContent;
    })

    num.addEventListener("mousedown", (event) => {
        event.target.style.backgroundColor = "grey";
    })

    num.addEventListener("mouseup", (event) => {
        event.target.style.backgroundColor = "#373A40";
    })    
})

document.querySelectorAll(".clear").forEach( symbol => {
    symbol.addEventListener("click", (event) => {
        let target = event.target;
        let currentText = screen.textContent;
        if (target.id == 'delete')
        {
            screen.textContent = currentText.slice(0, -1);
        }
        else
        {
            screen.textContent = '';
            a = '';
            b = '';
            document.querySelectorAll(".operators").forEach( operator => {
                operator.style.backgroundColor = "#373A40";
            })            
        }
    })
})

document.querySelectorAll(".operators").forEach( (operator) => {
    operator.addEventListener("click", event => {
        toDo = event.target.textContent;
        firstNum();
        screen.textContent = '';
        event.target.style.backgroundColor = "grey";
    })
})

equal.addEventListener("click", () => {
    secondNum();
    screen.textContent = maths[toDo](a, b);
    document.querySelectorAll(".operators").forEach( operator => {
        operator.style.backgroundColor = "#373A40";
    })
})