'use strict'


var gNums
var gNextNum
var gDifficulty
var gIntervalTime
var TIME

function onInit() {
    const elMsg = document.querySelector('.msg')
    const elNewButton = document.querySelector('.new')
    gDifficulty = checkDifficulty()
    gNextNum = 1
    gNums = shuffle(getNums(gDifficulty))
    elMsg.innerText = 'Push the numbers by order in the shortest time possible'
    elNewButton.innerText = 'New Game'
    if (gIntervalTime) {
        clearInterval(gIntervalTime)
        const elClock = document.querySelector('.clock')
        elClock.innerText = ''

    }
    displayNextNum()
    renderBoard()

}

function checkDifficulty() {
    const difficulty = document.querySelector('.difficulty')
    return difficulty.value
    // if (document.querySelector('.esay').checked) {
    //     return 4
    // }
    // if (document.querySelector('.hard').checked) {
    //     return 5
    // }
    // if (document.querySelector('.extreme').checked) {
    //     return 6
    // }
    // return 4
}


function renderBoard() {
    var strHTML = ''
    for (var i = 0; i < gDifficulty; i++) {
        strHTML += '<tr>'
        for (var j = 0; j < gDifficulty; j++) {
            const cell = gNums.pop() //[i][j]
            // const className = cell ? 'pushed' : '' class="${className} "
            // strHTML += `<td onclick="cellClicked(this, ${cell})">${cell}</td>`
            strHTML += `<td><button onclick="cellClicked(this, ${cell})">${cell}</button></td>`
        }
        strHTML += '</tr>'

    }
    const elBoard = document.querySelector('tbody.board')
    elBoard.innerHTML = strHTML

}

function cellClicked(elTdCell, clickedNum) {
    if (clickedNum !== gNextNum) return

    if (clickedNum === 1) {
        TIME = new Date().getTime()
        gIntervalTime = setInterval(uploadClock, 100)

    }
    elTdCell.classList.add('pushed')
    if (clickedNum === gDifficulty ** 2) {
        gameOver()
        return
    }
    gNextNum++
    displayNextNum()
}

function displayNextNum() {
    const elNext = document.querySelector('.next')
    elNext.innerText = ' ' + gNextNum
}

function gameOver() {
    const elClock = document.querySelector('.clock')
    const elMsg = document.querySelector('.msg')
    const elNewButton = document.querySelector('.new')
    clearInterval(gIntervalTime)
    elMsg.innerText = `Well done! you finished in ${elClock.innerText} seconds, play again and beat your own record?`
    elNewButton.innerText = 'Play Again'

}