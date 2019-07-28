const backgroundButtons = document.getElementsByClassName("backgroundButton");
const textButtons = document.getElementsByClassName("textButton");

// Add more color option if required
const bgbuttonArr = ['#51201a', 'salmon', 'antiquewhite', '#203308', '#222830', '#002b36', '#301433', '#4e4c5d', '#3C4556'];
const textbuttonArr = ['#b9a655', 'antiquewhite', 'lightslategray', '#1a1d24', '#b4d3c1', '#bdc2ce'];

// Create Background color change button
bgbuttonArr.forEach((color, i) => {
  let btn = document.createElement('button');
  btn.className = 'backgroundButton';
  btn.id = `backgroundButton_${i}`
  btn.style.backgroundColor = color;

  let changeBackgroundDiv = document.getElementById('changeBackground');
  changeBackgroundDiv.appendChild(btn);
});

// Create Text color change button
textbuttonArr.forEach((color, i) => {
  let btn = document.createElement('button');
  btn.className = 'textButton';
  btn.id = `textButton_${i}`
  btn.style.backgroundColor = color;

  let changeText = document.getElementById('changeText');
  changeText.appendChild(btn);
});

// Add eventlistners to button
for (let backgroundButton of backgroundButtons) {
  backgroundButton.addEventListener('click', (element) => {
    let bgColor = element.target.style.backgroundColor;
    /***Used to run a one line query on webpage***/
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.tabs.executeScript(tabs[0].id, {
        code: `document.body.style.setProperty('background-color','${bgColor}','important');
                var divs = document.getElementsByTagName('div');
                var canvases = document.getElementsByTagName('canvas');
                var tables = document.getElementsByTagName('table');
                for (let div of divs) {
                  div.style.setProperty('background-color','transparent','important');
                }
                if(canvases){
                  for (let canvas of canvases) {
                    canvas.style.setProperty('background-color','transparent','important');
                  }
                }
                if(tables){
                  for (let table of tables) {
                    table.style.setProperty('background-color','transparent','important');
                  }
                }`
      });
    });
    /***Used to run a one line query on webpage***/
  });
}

for (let textButton of textButtons) {
  textButton.addEventListener('click', (element) => {
    let textColor = element.target.style.backgroundColor;
    /***Used to run a one line query on webpage***/
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.tabs.executeScript(tabs[0].id, {
        code: `document.body.style.setProperty('color','${textColor}','important');
                [...document.querySelectorAll('p')].forEach(el => el.style.setProperty('color','${textColor}','important'));
                [...document.querySelectorAll('li')].forEach(el => el.style.setProperty('color','${textColor}','important'));
                [...document.querySelectorAll('h1')].forEach(el => el.style.setProperty('color','${textColor}','important'));`
      });
    });
    /***Used to run a one line query on webpage***/
  });
}