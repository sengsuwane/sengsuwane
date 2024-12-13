let scoreEl = document.getElementById("points-el")
let goalEl = document.getElementById("count-el")
let count = 0
let number = 0

function score1() {
    count = count + 1
    scoreEl.innerText = count
}
function score2() {
    count = count + 2
    scoreEl.innerText = count
}
function score3() {
    count = count + 3
    scoreEl.innerText = count
}
function goal1() {
    number = number + 1
    goalEl.innerText = number
}
function goal2() {
    number = number + 2
    goalEl.innerText = number
}
function goal3() {
    number = number + 3
    goalEl.innerText = number
}

function reset() {
    scoreEl.innerText = 0
    goalEl.innerText = 0
}