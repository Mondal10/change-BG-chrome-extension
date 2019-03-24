const backgroundButtons = document.getElementsByClassName("backgroundButton");
const textButtons = document.getElementsByClassName("textButton");

// Add more color option
const bgbuttonArr = ['salmon', 'antiquewhite', 'lightslategray', 'black', 'cornflowerblue', 'darkolivegreen', '#222830', '#002b36'];
const textbuttonArr = ['white', 'antiquewhite', 'lightslategray', '#1a1d24'];

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
        code: `document.body.style.backgroundColor = '${bgColor}';
                var divs = document.getElementsByTagName('div');
                var canvases = document.getElementsByTagName('canvas');
                var tables = document.getElementsByTagName('table');
                for (let div of divs) {
                  div.style.backgroundColor = 'transparent';
                }
                if(canvases){
                  for (let canvas of canvases) {
                    canvas.style.backgroundColor = 'transparent';
                  }
                }
                if(tables){
                  for (let table of tables) {
                    table.style.backgroundColor = 'transparent';
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
        code: `document.body.style.color = '${textColor}'`
      });
    });
    /***Used to run a one line query on webpage***/
  });
}