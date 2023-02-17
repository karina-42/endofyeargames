//get buttons from HTML
const newWordsBtn = document.getElementById('newWords')
const nazoBtn = document.getElementById('nazo')
const dontMatchBtn = document.getElementById('dontMatch')
const wordPlusWordBtn = document.getElementById('wordPlusWord')
const top5Btn = document.getElementById('top5')
const pointsBtn = document.getElementById('pointsBtn')

//add on click event listeners to buttons
newWordsBtn.addEventListener('click', showWords)
nazoBtn.addEventListener('click' , showNazo)
dontMatchBtn.addEventListener('click', showDontMatch)
wordPlusWordBtn.addEventListener('click', showWordPlusWord)
top5Btn.addEventListener('click', showTop5)
pointsBtn.addEventListener('click', showPoints)

//get title, problem and points element from document to change later
const title = document.getElementById('title')
const problem = document.getElementById('problem')
const points = document.getElementById('points')

//function to show points on click of points button
function showPoints() {
  let randomPoints = Math.floor(Math.random() * 10 + 1) * 10 
  points.textContent = randomPoints
}

//initialize count of button presses
let newWordsBtnTimesClicked = 0
let nazoBtnTimesClicked = 0
let dontMatchBtnTimesClicked = 0
let wordPlusWordBtnTimesClicked = 0
let top5BtnTimesClicked = 0

//arrays needed for each game
let wordsArray = ['pam param', 'second word', 'third word', 'fourth word', 'fifth word']

let nazoArray = ['nazo1', 'nazo2', 'nazo3', 'nazo4', 'nazo5']

let dontMatchArray = ['dontMatch1', 'dontMatch2', 'dontMatch3', 'dontMatch4', 'dontMatch5']

let wordImagesArray = [
  {
    src: 'imgs/keyboard.png',
    answerImg: 'imgs/stefen-tan-KYw1eUx1J7Y-unsplash.jpg',
    answer: 'keyboard'
  }
]

let top5Array = [

]

//functions to show the games on click of their buttons
//make new words game
function showWords() {
  newWordsBtnTimesClicked += 1
  points.textContent = 'Get these points!'
  title.textContent = 'Make New Words'
  problem.textContent = wordsArray[newWordsBtnTimesClicked - 1] 
  if (newWordsBtnTimesClicked === 5) {
    newWordsBtn.disabled = true
  }
}

//nazo nazo riddle game
function showNazo() {
  nazoBtnTimesClicked += 1
  points.textContent = 'Get these points!'
  title.textContent = "Nazo Nazo"
  problem.textContent = nazoArray[nazoBtnTimesClicked - 1]
  nazoBtnTimesClicked === 5 ? nazoBtn.disabled = true : nazoBtnTimesClicked
}

//don't match your answers game
function showDontMatch() {
  dontMatchBtnTimesClicked += 1
  points.textContent = 'Get these points!'
  title.textContent = "Don't Match"
  problem.textContent = dontMatchArray[dontMatchBtnTimesClicked - 1]
  dontMatchBtnTimesClicked === 5 ? dontMatchBtn.disabled = true : dontMatchBtnTimesClicked
}

//word + word = word
function showWordPlusWord() {
  wordPlusWordBtnTimesClicked += 1
  points.textContent = 'Get these points!'
  title.textContent = "word + word = newWord"
  problem.textContent = 'Solve this problem!'

  let img = document.createElement('img')
  img.src = wordImagesArray[wordPlusWordBtnTimesClicked - 1].src

  problem.appendChild(img)

  wordPlusWordBtnTimesClicked === 5 ? wordPlusWordBtn.disabled = true : wordPlusWordBtnTimesClicked

  console.log(wordPlusWordBtnTimesClicked);

  let ansBtn = document.createElement('button')
  ansBtn.innerHTML = "Answer"
  problem.appendChild(ansBtn)
  ansBtn.onclick = function() {
    let answer = document.createElement('p')
    answer.textContent = wordImagesArray[wordPlusWordBtnTimesClicked - 1].answer
    problem.appendChild(answer)
    let ansImg = document.createElement('img')
    ansImg.src = wordImagesArray[wordPlusWordBtnTimesClicked - 1].answerImg
    problem.appendChild(ansImg)
  }
}

//top 5 game
function showTop5() {
  
}


// let one = document.getElementById('one')
// one.addEventListener('click', show)
// let two = document.getElementById('two')
// two.addEventListener('click', show)
// let three = document.getElementById('three')
// three.addEventListener('click', show)
// let one = document.getElementById('one')
// one.addEventListener('click', show)
// let one = document.getElementById('one')
// one.addEventListener('click', show)

  function show() {
    one.textContent = 'dogs'
  }

// function showTop5() {
//   top5BtnTimesClicked += 1
//   title.textContent = "Top 5"
//   problem.textContent = dontMatchArray[top5BtnTimesClicked - 1]
//   top5BtnTimesClicked === 5 ? top5Btn.disabled = true : top5BtnTimesClicked


// }