const selectMonths = document.querySelector('#months select')
const list = document.querySelector('#calendar ul')
const h1 = document.querySelector('#calendar h1')

selectMonths.onchange = function () {
  const month = selectMonths.value
  let days = 31
  
  if (month === 'February') {
    days = 28
  } else if (month === 'April' || month === 'June' || month === 'September' || month === 'November') {
    days = 30
  }

  createCalendar(days, month)
}

function createCalendar(days, month) {
  list.innerHTML = ''
  h1.textContent = month
  for (let i = 1; i <= days; i++) {
    const listItem = document.createElement('li')
    listItem.textContent = i
    list.appendChild(listItem)
  }
}

createCalendar(31, 'January')

// themes
const body = document.querySelector('body')
const script = document.createElement('script')

script.src = "/scripts/themes.js"

body.appendChild(script)