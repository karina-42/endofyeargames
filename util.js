function showPoints() {
  let randomPoints = Math.floor(Math.random() * 10 + 1) * 5
  if (points.classList.contains('strike')) {
    points.classList.remove('strike')
  }
  points.textContent = randomPoints
}

function clearScreen() {
  if (document.getElementById('ol')) {
    document.getElementById('ol').remove()
  }
  if (document.getElementById('wordPlusWordContent')) {
    document.getElementById('wordPlusWordContent').remove()
  }
  if (document.querySelector('.newWordAnswer')) {
    document.querySelector('.newWordAnswer').remove()
  }
  if (document.querySelector('.ansBtn')) {
    document.querySelector('.ansBtn').remove()
  }
  if (document.querySelector('.highlightOriginalWord')) {
      document.querySelector('.highlightOriginalWord').classList.remove('highlightOriginalWord')
    }
  if(document.querySelector('.strike')) {
      document.querySelectorAll('.strike').forEach((element) => element.classList.remove('strike'))
    }
  }

export { showPoints, clearScreen }