const btnsLevel = document.querySelectorAll('.btn')
const btnCheck = document.querySelector('.btn-check')
const btnReset = document.querySelector('.btn-reset')
const input = document.querySelector('input[type="number"]')

const result = document.querySelector('.result')

let count = 0
let includesCount = 0
let arrCompNum
let checkNum = []
let includesNum = []


btnsLevel.forEach((btn, _, arr) => {
    btn.addEventListener('click', (e) => {
        arrCompNum = toString(random(e.target.value))
        btnCheck.disabled = false
        arr.forEach(btn => btn.disabled = true)
    })
})

btnCheck.addEventListener('click', () => {
    check(getUserNum())
})

btnReset.addEventListener('click', restart)


function random(level) {
    const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    const newArr = [];
    for (let i = 0; i < level; i++) {
      let index = Math.floor(Math.random() * arr.length);
      newArr.push(arr[index]);
      arr.splice(index, 1)
    }
    return newArr
  }



function toString (num) {
    return String(num).split(',')
}

function getUserNum () {
    return String(document.querySelector('input[type="number"]').value).split('')
}

function check (arr) {
    resetCurrentValue()

    arr.forEach((el, i) => {
        if (el === arrCompNum[i]) {
            count++
            checkNum.push(el)
        } else if (arrCompNum.includes(el)) {
            includesCount++
            includesNum.push(el)
        }
        else {
            return
        }
    })
    if (count === arrCompNum.length) {
        document.querySelector('.modal').style.display = 'flex'
    } else result.innerText = `Совпавших цифр не на своих местах - ${includesCount} (${includesNum.join(' и ')}), цифр на своих местах ${count} (${checkNum.join(' и ')})`
}

function resetCurrentValue () {
    count = 0
    checkNum = []
    includesCount = 0
    includesNum= []
}

function restart () {
    count = 0
    includesCount = 0
    checkNum = []
    includesNum = []
    btnCheck.disabled = true
    document.querySelector('.modal').style.display = 'none'
    input.value = ''
    result.innerText = ''
    btnsLevel.forEach(btn => btn.disabled = false)
}