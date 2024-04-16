const COUNT_DOWN = 15 * 60
var total = COUNT_DOWN
var start_time = 0
var paused = true
var timer
function show () {
  r = Math.abs(total % 60)
  if (r < 10) {
    r = '0' + r
  }
  m = Math.floor(total / 60)
  if (m < 0) {
    m++
    if (m == 0) {
      m = '-0'
    }
  }
  var text = '' + m + ':' + r
  document.getElementById('timer').innerText = text
}
function do_timer () {
  timer = setTimeout(do_timer, 10)
  new_total = COUNT_DOWN - Math.floor((Date.now() - start_time) / 1000)
  if (new_total != total) {
    total = new_total
    show()
  }
}
function pause_click () {
  console.log('paused click')
  paused = !paused
  if (paused) {
    console.log('paused')
    clearTimeout(timer)
  } else {
    start_time = Date.now() - (COUNT_DOWN - total) * 1000
    do_timer()
  }
}
function reset_click () {
  total = COUNT_DOWN
  start_time = Date.now()
  show()
}
document.addEventListener('DOMContentLoaded', event => {
  console.log('DOM fully loaded and parsed')
  document.getElementById('pause').addEventListener('click', () => {
    pause_click()
  })
  document.getElementById('reset').addEventListener('click', () => {
    reset_click()
  })
  show()
})
