/*
1) Дан массив из объектов с полями title и text. Заполните массив сами произвольными данными. 
Ваша задача отрисовать данные на странице в соответствующих тегах (h2 - для title, p - для text)
*/

let data = [
    { title: "Заголовок-1", text: "Текст-1" },
    { title: "Заголовок-2", text: "Текст-2" },
    { title: "Заголовок-3", text: "Текст-3" }
  ];

  let dataContainer = document.getElementById("data-container")

  data.forEach(function(item) {
    let titleElement = document.createElement("h2")
    titleElement.textContent = item.title;

    let textElement = document.createElement("p")
    textElement.textContent = item.text;

    dataContainer.appendChild(titleElement)
    dataContainer.appendChild(textElement)
  })



/*
2) Дан элемент. Сделайте так, чтобы по клику на него он красился в красный цвет, 
но только если в момент клика нажата клавиша Ctrl
*/

let element = document.getElementById("element")

element.addEventListener("click", function(event) {
  if (event.metaKey) {
    element.style.color = "red"
  }
})



/*
3) Дан элемент. Сделайте так, чтобы при клике на него и нажатой клавише Ctrl - в его текст записывалось '1', 
при нажатой клавише Alt - '2', а при нажатой клавише Shift - '3'
*/

const elementAltCtrl = document.getElementById('myElement')

elementAltCtrl.addEventListener('click', function(event) {
      let keyText = ''

      if (event.metaKey) {
        keyText = '1';
      } else if (event.altKey) {
        keyText = '2';
      } else if (event.shiftKey) {
        keyText = '3';
      }

      elementAltCtrl.textContent = keyText;
    })



/*
4)  Даны абзацы с числами. То есть, несколько подобных элементов <p>1</p>. 
По нажатию на абзац в нем должен появится квадрат числа, которое он содержит.
*/

const paragraphs = document.querySelectorAll('p')

paragraphs.forEach((paragraph) => {
  paragraph.addEventListener('click', function() {
    const number = parseFloat(paragraph.textContent)
    const square = number * number

    paragraph.textContent = square
  })
})



/*
5) Даны картинки. Привяжите к каждой картинке событие, 
чтобы по клику на картинку в console.log выводился ее src. 
*/

const images = document.querySelectorAll('img')

images.forEach((image) => {
  image.addEventListener('click', function() {
    console.log(image.src)
  })
})



/*
6) Даны ссылки с заполненным href. Например <a href="https://google.com">Сайт гугл</a>. Привяжите 
всем ссылкам событие - по наведению на ссылку в конец ее текста дописывается ее href в круглых скобках.
*/

const links = document.querySelectorAll('a')

links.forEach((link) => {
  link.addEventListener('mouseenter', function() {
    const href = link.getAttribute('href')

    link.textContent = `${link.textContent} (${href})`
  })

  link.addEventListener('mouseout', function() {
    const originalText = link.textContent.split(' (')[0]
    link.textContent = originalText
  })
})
