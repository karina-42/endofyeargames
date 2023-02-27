import { newWordsArray, nazoArray, dontMatchArray, wordImagesArray, top5Array } from "./data.js"
import { showPoints, clearScreen } from "./util.js"

//get buttons from HTML
const newWordsBtn = document.getElementById('newWords')
const nazoBtn = document.getElementById('nazo')
const dontMatchBtn = document.getElementById('dontMatch')
const wordPlusWordBtn = document.getElementById('wordPlusWord')
const top5Btn = document.getElementById('top5')
const pointsBtn = document.getElementById('pointsBtn')

//add on click event listeners to buttons
newWordsBtn.addEventListener('click', showNewWords)
nazoBtn.addEventListener('click' , showNazo)
dontMatchBtn.addEventListener('click', showDontMatch)
wordPlusWordBtn.addEventListener('click', showWordPlusWord)
top5Btn.addEventListener('click', showTop5)
pointsBtn.addEventListener('click', showPoints)

//get title, problem, span and points element from document to change later
const title = document.getElementById('title')
const problem = document.getElementById('problem')
const points = document.getElementById('points')
const newWordsSpan = document.getElementById('newWordsSpan')
const nazonazoSpan = document.getElementById('nazonazoSpan')
const top5Span = document.getElementById('top5Span')
const wordPlusSpan = document.getElementById('wordPlusSpan')
const dontMatchSpan = document.getElementById('dontMatchSpan')

//count finished games to show a message once they're all done
let finishedGames = 0

function goodbye() {
  finishedGames += 1
 if (finishedGames === 5) {
//  alert('finished games!');
 pointsBtn.addEventListener('click', later)
 }
 function later() {
  setTimeout(() => alert('thanks for all the fish'), 2000)
 }
//adding something to the points button that'll make something happen sometime (setInterval) after clicked, give them a chance to get their points
}

//initialize count of button presses
let newWordsBtnTimesClicked = 0
let nazoBtnTimesClicked = 0
let dontMatchBtnTimesClicked = 0
let wordPlusWordBtnTimesClicked = 0
let top5BtnTimesClicked = 0

//functions to show the games on click of their buttons
//don't match your answers game
function showDontMatch() {
  dontMatchBtnTimesClicked += 1
  clearScreen()
 
  points.textContent = 'Get these points! (half if you matched 🙀)'
  pointsBtn.style.display = 'inline-block'
  dontMatchSpan.textContent = dontMatchBtnTimesClicked 
  title.textContent = "Don't Match"
  problem.textContent = dontMatchArray[dontMatchBtnTimesClicked - 1]

  if (dontMatchBtnTimesClicked === 5){
    dontMatchBtn.disabled = true
    goodbye()
  }
}

//word + word = word
function showWordPlusWord() {
  wordPlusWordBtnTimesClicked += 1
  clearScreen()

  points.textContent = 'Get these points!'
  
  pointsBtn.style.display = 'inline-block'
  wordPlusSpan.textContent = wordPlusWordBtnTimesClicked
  title.textContent = "word + word = newWord"
  problem.textContent = 'Solve this problem!'

  let wordPlusWordContent = document.createElement('section')
  wordPlusWordContent.setAttribute('id', "wordPlusWordContent")
  problem.after(wordPlusWordContent)

  let img = document.createElement('img')
  img.setAttribute('id', 'problemImg')
  img.src = wordImagesArray[wordPlusWordBtnTimesClicked - 1].src
  wordPlusWordContent.append(img)

  let ansBtn = document.createElement('button')
  ansBtn.className = 'ansBtn'
  ansBtn.innerText = "Answer"
  wordPlusWordContent.append(ansBtn)
  ansBtn.onclick = function() {
    let answer = document.createElement('p')
    answer.className = 'newWordAnswer'
    answer.textContent = wordImagesArray[wordPlusWordBtnTimesClicked - 1].answer
    ansBtn.before(answer)
    let ansImg = document.createElement('img')
    ansImg.className = 'ansImg'
    ansImg.src = wordImagesArray[wordPlusWordBtnTimesClicked - 1].answerImg
    answer.after(ansImg)

    ansBtn.remove()

  }

  if (wordPlusWordBtnTimesClicked === 5) {
    wordPlusWordBtn.disabled = true
    goodbye()
  } 
}

//top 5 game
function showTop5() {
  top5BtnTimesClicked += 1
  clearScreen()

  points.textContent = ''

  pointsBtn.style.display = 'none'
  top5Span.textContent = top5BtnTimesClicked
  title.textContent = 'Angie\'s Top 5s'
  problem.textContent = top5Array[top5BtnTimesClicked - 1].theme

  let ol = document.createElement('ol')
  ol.setAttribute('id', 'ol')
  for(let i =5; i>=1; i--) {
    let li = document.createElement('li')
    li.textContent = `${i}0 points`
    li.setAttribute('id', `position${i}`)
    li.className = 'top5listItems' 
    ol.append(li)
  }
  problem.after(ol)
  
  let position1 = document.getElementById('position1')
  position1.addEventListener('click', change1)
  function change1() {
    position1.textContent = top5Array[top5BtnTimesClicked - 1].array[0]
    position1.style.backgroundColor = '#7E9012'
  }
  let position2 = document.getElementById('position2')
  position2.addEventListener('click', change2)
  function change2() {
    position2.textContent = top5Array[top5BtnTimesClicked - 1].array[1]
    position2.style.backgroundColor = '#60881D'
  }
  let position3 = document.getElementById('position3')
  position3.addEventListener('click', change3)
  function change3() {
    position3.textContent = top5Array[top5BtnTimesClicked - 1].array[2]
    position3.style.backgroundColor = '#438028'
  }
  let position4 = document.getElementById('position4')
  position4.addEventListener('click', change4)
  function change4() {
    position4.textContent = top5Array[top5BtnTimesClicked - 1].array[3]
    position4.style.backgroundColor = '#257832'
  }
  let position5 = document.getElementById('position5')
  position5.addEventListener('click', change5)
  function change5() {
    position5.textContent = top5Array[top5BtnTimesClicked - 1].array[4]
    position5.style.backgroundColor = '#07703D'
  }
  
  if (top5BtnTimesClicked === 5){
    top5Btn.disabled = true
    goodbye()
  }
}

//nazo nazo riddle game
function showNazo() {
  nazoBtnTimesClicked += 1
  clearScreen()
  
  points.textContent = 'Get these points!'
  pointsBtn.style.display = 'inline-block'
  nazonazoSpan.textContent = nazoBtnTimesClicked

  title.textContent = "Nazo Nazo"
  problem.textContent = nazoArray[nazoBtnTimesClicked - 1].nazo

  let ansBtn = document.createElement('button')
  ansBtn.className = 'ansBtn'
  ansBtn.innerText = "Answer"
  problem.after(ansBtn)
  ansBtn.onclick = function() {
    let answer = document.createElement('p')
    answer.className = 'newWordAnswer'
    answer.textContent = nazoArray[nazoBtnTimesClicked - 1].answer
    ansBtn.before(answer)
    ansBtn.remove()
  }

  if (nazoBtnTimesClicked === 5) {
    nazoBtn.disabled = true
    goodbye()
  }
}

//make new words game
function showNewWords() {

  newWordsBtnTimesClicked += 1
  clearScreen()
  
  points.textContent = 'Get these points x each word!'
  pointsBtn.style.display = 'inline-block'
  newWordsSpan.textContent = newWordsBtnTimesClicked 

  title.textContent = 'Make New Words'
  problem.textContent = newWordsArray[newWordsBtnTimesClicked - 1]
  problem.className = 'highlightOriginalWord'

  setTimeout(() => {
    title.className= 'strike'
    points.className= 'strike'
  }, 1000)



  if (newWordsBtnTimesClicked === 5) {
    newWordsBtn.disabled = true
    goodbye()
  }

}