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
let newWordsArray = ['supercalifragilisticexpialidocious', 'one hundred percent', 'exceptional students', 'impossible fiction', 'see you later']

let nazoArray = [
  {
    nazo: 'How many letters are in the alphabet?',
    answer: '11 - t h e a l p h a b e t'
  },
  {
    nazo: 'What can you see once in a minute, twice in a moment and never in one thousand years?',
    answer: 'The letter "m"'
  },
  {
    nazo: 'A woman and 9 friends are under ONE umbrella. But nobody gets wet. Why?',
    answer: 'Because it isn\’t raining.'
  },
  {
    nazo: 'Which letter of the alphabet has the most water?',
    answer: 'The letter "C"'
  }
  ]

let dontMatchArray = ['Who is an actor that is beautiful?', 'What is an animal that is cute?', 'Who is a singer that is cool?', 'What is an interesting movie to watch?', 'Who is a teacher that is funny?']

let wordImagesArray = [
  {
    src: 'imgs/firefighter.png',
    answerImg: 'imgs/andrew-gaines-s76S64umXpo-unsplash.jpg',
    answer: 'firefighter'
  },
  {
    src: 'imgs/keyboard.png',
    answerImg: 'imgs/stefen-tan-KYw1eUx1J7Y-unsplash.jpg',
    answer: 'keyboard'
  },
  {
    src: 'imgs/watermelon.png',
    answerImg: 'imgs/mockup-graphics-HuMXepbutF8-unsplash.jpg',
    answer: 'watermelon'
  },
  {
    src: 'imgs/hamburger.png',
    answerImg: 'imgs/amirali-mirhashemian-sc5sTPMrVfk-unsplash.jpg',
    answer: 'hamburger'
  },
  {
    src: 'imgs/cupcake.png',
    answerImg: 'imgs/sara-cervera-zEwgRzJJIvk-unsplash.jpg',
    answer: 'cupcake'
  }
]

let top5Array = [
  {
    theme: 'Pets',
    array: [
      'butterfly',
      'snek',
      'bird',
      'cat',
      'dog'
    ]
  },
  {
    theme: 'Snacks',
    array: [
      'chips',
      'choco',
      'gummies',
      'nuts',
      'cookies'
    ]
  }
]

//functions to show the games on click of their buttons
//make new words game
function showNewWords() {
  newWordsBtnTimesClicked += 1
  if (document.getElementById('ol')) {
    document.getElementById('ol').textContent = ''
  }
  if (document.getElementById('wordPlusWordContent')) {
    document.getElementById('wordPlusWordContent').remove()
  }
  if (document.querySelector('.newWordAnswer')) {
    document.querySelector('.newWordAnswer').remove()
  }
  points.textContent = 'Get these points x each word!'
  pointsBtn.style.visibility = 'visible'
  newWordsSpan.textContent = newWordsBtnTimesClicked 

  title.textContent = 'Make New Words'
  problem.textContent = newWordsArray[newWordsBtnTimesClicked - 1] 
  if (newWordsBtnTimesClicked === 5) {
    newWordsBtn.disabled = true
  }
}

//nazo nazo riddle game
function showNazo() {
  nazoBtnTimesClicked += 1
  if (document.getElementById('ol')) {
    document.getElementById('ol').textContent = ''
  }
  if (document.getElementById('wordPlusWordContent')) {
    document.getElementById('wordPlusWordContent').remove()
  }
  if (document.querySelector('.newWordAnswer')) {
    document.querySelector('.newWordAnswer').remove()
  }
  points.textContent = 'Get these points!'
  pointsBtn.style.visibility = 'visible'
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

  nazoBtnTimesClicked === 5 ? nazoBtn.disabled = true : nazoBtnTimesClicked
}

//don't match your answers game
function showDontMatch() {
  dontMatchBtnTimesClicked += 1
  if (document.getElementById('ol')) {
    document.getElementById('ol').textContent = ''
  }
  if (document.getElementById('wordPlusWordContent')) {
    document.getElementById('wordPlusWordContent').remove()
  }
  if (document.querySelector('.newWordAnswer')) {
    document.querySelector('.newWordAnswer').remove()
  }
  points.textContent = 'Get these points! (half if you matched 🙀)'
  pointsBtn.style.visibility = 'visible'
  dontMatchSpan.textContent = dontMatchBtnTimesClicked 
  title.textContent = "Don't Match"
  problem.textContent = dontMatchArray[dontMatchBtnTimesClicked - 1]
  dontMatchBtnTimesClicked === 5 ? dontMatchBtn.disabled = true : dontMatchBtnTimesClicked
}

//word + word = word
function showWordPlusWord() {
  wordPlusWordBtnTimesClicked += 1
  if (document.getElementById('ol')) {
    document.getElementById('ol').textContent = ''
  }
  if (document.getElementById('wordPlusWordContent')) {
    document.getElementById('wordPlusWordContent').remove()
  }
  if (document.querySelector('.newWordAnswer')) {
    document.querySelector('.newWordAnswer').remove()
  }
  points.textContent = 'Get these points!'
  pointsBtn.style.visibility = 'visible'
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
  // ansBtn.setAttribute('id', 'wordPlusAnswBtn')
  ansBtn.innerText = "Answer"
  wordPlusWordContent.append(ansBtn)
  ansBtn.onclick = function() {
    let answer = document.createElement('p')
    answer.className = 'newWordAnswer'
    answer.textContent = wordImagesArray[wordPlusWordBtnTimesClicked - 1].answer
    ansBtn.before(answer)
    let ansImg = document.createElement('img')
    ansImg.src = wordImagesArray[wordPlusWordBtnTimesClicked - 1].answerImg
    answer.after(ansImg)
    ansBtn.style.visibility = 'hidden'
  }

  wordPlusWordBtnTimesClicked === 5 ? wordPlusWordBtn.disabled = true : wordPlusWordBtnTimesClicked
}

//top 5 game
function showTop5() {
  top5BtnTimesClicked += 1
  if (document.getElementById('ol')) {
    document.getElementById('ol').textContent = ''
  }
  if (document.getElementById('wordPlusWordContent')) {
    document.getElementById('wordPlusWordContent').remove()
  }
  if (document.querySelector('.newWordAnswer')) {
    document.querySelector('.newWordAnswer').remove()
  }
  points.textContent = ''
  pointsBtn.style.visibility = 'hidden'
  top5Span.textContent = top5BtnTimesClicked
  title.textContent = 'Top 5'
  problem.textContent = top5Array[top5BtnTimesClicked - 1].theme

  let ol = document.createElement('ol')
  ol.setAttribute('id', 'ol')
  for(let i =5; i>=1; i--) {
    let li = document.createElement('li')
    li.textContent = `${i} points`
    if(i === 1) {
      li.textContent = `${i} point`
    }
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
}