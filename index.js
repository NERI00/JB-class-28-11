/*const dowork = (callback, hours, callback2) => {
    callback(hours)
    callback2()
}

const printNumber = (num) => {
    console.log("number is: " + num)
}    

const printGoodJob = () => {
    console.log("good job!")
} 

const runCode = () => {

    
    let hours = 15
    dowork(printNumber, hours, printGoodJob)
    
    console.log("end")
}   

let colorElement = document.getElementById("Run-code")
let colorList = ["red", "blue"]
let clockElement = document.getElementById("clock")
let flag = 0

const runCode = () => {
    intervalId = setInterval(() => {

        changeColors()

    }, 1 * 1000)
}

const changeColors = () => {
    if (flag === 0) {
        colorElement.style.background = "red"
        flag = 1
    } else {
        colorElement.style.background = "blue"
        flag = 0
    }
    const now = new Date()
    const time = now.toLocaleTimeString()

    clockElement.innerHTML = time
}
const stop = () => {
    clearInterval(intervalId)
}
*/

let randomNumBox = document.getElementById("clock")

const runCode = () => {
    let myPromise = getRandomEvenNumber(0, 100)

    myPromise.then((num) => {
        randomNumBox.innerHTML = "even number is: " + num
    })
    .catch((num) => {
        randomNumBox.innerHTML = "odd number is: " + num
    })
}


const getRandomEvenNumber = (min, max) => {
    return new Promise((resolve, reject) => {
        let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min

        if (randomNumber % 2 === 0) {
            resolve(randomNumber)
        } else {
            reject(randomNumber)
        }
    })

     
    
}
const stop = () => {
    
    randomNumBox.innerHTML = ''
}




