
function shuffle(items) {
    for (var i = items.length - 1; i > 0; i--) {
        // console.log('i:', i)
        var randIdx = getRandomInt(0, items.length - 1)
        var temp = items[i]
        items[i] = items[randIdx]
        items[randIdx] = temp
    }
    // console.log('items:', items)
    return items
}

function getNums(count) {
    const nums = []
    count *= count
    for (var i = 0; i < count; i++) {
        nums.push(i + 1)
    }
    return nums
}

function uploadClock() {
    const elClock = document.querySelector('.clock')
    const now = new Date().getTime()
    const timer = Number.parseFloat((now - TIME) / 1000).toFixed(3)
    // console.log(timer)
    elClock.innerText = timer

}

function getRandomInt(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min) + min)
}




