let box = document.getElementById("box")
let border = document.getElementById("border")

let colors = ["red", "green", "blue", "yellow", "orange", "pink", "purple", "brown", "grey"]

function changeColor() {
    let random = Math.floor(Math.random() * colors.length)
    box.style.borderColor = colors[random]
}

let first = document.getElementById("margin0")
let second = document.getElementById("margin1")
let third = document.getElementById("margin2")

// randomly set the linear gradient of the id "margin0", "margin1", "margin2"

function changeBackground() {
    let random1 = Math.floor(Math.random() * colors.length)
    let random2 = Math.floor(Math.random() * colors.length)
    first.style.background = "linear-gradient(to right, " + colors[random1] + ", " + colors[random2] + ")"
    random1 = Math.floor(Math.random() * colors.length)
    random2 = Math.floor(Math.random() * colors.length)
    second.style.background = "linear-gradient(to right, " + colors[random1] + ", " + colors[random2] + ")"
    random1 = Math.floor(Math.random() * colors.length)
    random2 = Math.floor(Math.random() * colors.length)
    third.style.background = "linear-gradient(to right, " + colors[random1] + ", " + colors[random2] + ")"
}

function changeFontColor() {
    let random = Math.floor(Math.random() * colors.length)
    first.style.color = colors[random]
    random = Math.floor(Math.random() * colors.length)
    second.style.color = colors[random]
    random = Math.floor(Math.random() * colors.length)
    third.style.color = colors[random]
}
// set random border radius for the id "border"

function changeBorderRadius() {
    let random = Math.floor(Math.random() * 10)
    border.style.borderRadius = random + "%"
}

// can you call all the function using a single setInterval function

function changeAll() {
    changeColor()
    changeBackground()
    changeFontColor()
    changeBorderRadius()
}

setInterval(changeAll, 1000)