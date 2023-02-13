const newWordsBtn = document.getElementById('newWords')
const nazoBtn = document.getElementById('nazo')
const dontMatchBtn = document.getElementById('dontMatch')

newWordsBtn.addEventListener('click', showWords)
nazoBtn.addEventListener('click' , showNazo)
dontMatchBtn.addEventListener('click', showDontMatch)

const title = document.getElementById('title')
const problem = document.getElementById('problem')

let newWordsBtnTimesClicked = 0
let nazoBtnTimesClicked = 0
let dontMatchBtnTimesClicked = 0

let wordsArray = ['pam param', 'second word', 'third word', 'fourth word', 'fifth word']

let nazoArray = ['nazo1', 'nazo2', 'nazo3', 'nazo4', 'nazo5']

let dontMatchArray = ['dontMatch1', 'dontMatch2', 'dontMatch3', 'dontMatch4', 'dontMatch5']

function showWords() {
  newWordsBtnTimesClicked += 1
  title.textContent = 'Make New Words'
  problem.textContent = wordsArray[newWordsBtnTimesClicked - 1] 
  if (newWordsBtnTimesClicked === 5) {
    newWordsBtn.disabled = true
  }
}

function showNazo() {
  nazoBtnTimesClicked += 1
  title.textContent = "Nazo Nazo"
  problem.textContent = nazoArray[nazoBtnTimesClicked - 1]
  nazoBtnTimesClicked === 5 ? nazoBtn.disabled = true : nazoBtnTimesClicked
}

function showDontMatch() {
  dontMatchBtnTimesClicked += 1
  title.textContent = "Don't Match"
  problem.textContent = dontMatchArray[dontMatchBtnTimesClicked - 1]
  dontMatchBtnTimesClicked === 5 ? dontMatchBtn.disabled = true : dontMatchBtnTimesClicked
}
