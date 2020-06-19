const selectTheme = document.querySelector('#themes select')

const href = document.querySelector('link[href="/styles/main.css"]')

selectTheme.onchange = function() {
  const theme = selectTheme.value

  switch (theme) {
    case 'Amrilato':
      href.setAttribute('href','/styles/amrilato.css')
      break
    case 'Dark':
      href.setAttribute('href','/styles/dark.css')
      break
    case 'Default':
      href.setAttribute('href','/styles/main.css')
      break
  }
}