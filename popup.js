const backgroundButtons = document.getElementsByClassName("backgroundButton");
const textButtons = document.getElementsByClassName("textButton");


const bgbuttonArr = ['salmon', 'antiquewhite', 'lightslategray', 'black', 'cornflowerblue', 'darkolivegreen', '#222830', '#002b36'];
const textbuttonArr = ['white', 'antiquewhite', 'lightslategray', '#1a1d24'];

bgbuttonArr.forEach((color) => {

});

for (let backgroundButton of backgroundButtons) {
  backgroundButton.addEventListener('click', (element) => {
    let bgColor = element.target.style.backgroundColor;
    /***Used to run a one line query on webpage***/
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.tabs.executeScript(tabs[0].id, {
        code: `document.body.style.backgroundColor = '${bgColor}';
                var divs = document.getElementsByTagName('div'); 
                for (let div of divs) {
                  div.style.backgroundColor = 'transparent';
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