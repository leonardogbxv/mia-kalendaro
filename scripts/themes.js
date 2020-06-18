const selectTheme = document.querySelector('#themes select')

selectTheme.onchange = function() {
  const theme = selectTheme.value

  const href = document.querySelector('link[href="/styles/main.css"]')
  
  switch (theme) {
    case 'Amrilato':
      href.setAttribute('href','/styles/amrilato.css')
      break
    case 'Default':
      href.setAttribute('href','/styles/main.css')
      break
  }
}