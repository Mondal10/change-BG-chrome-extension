let backgroundButtons = document.getElementsByClassName("backgroundButton");
let textButtons = document.getElementsByClassName("textButton");

for (let backgroundButton of backgroundButtons) {
  backgroundButton.addEventListener('click', (element) => {
    // console.log("helooo",element.target.style.backgroundColor);
    let bgColor = element.target.style.backgroundColor;
    /***Used to run a one line query on webpage***/
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      // chrome.tabs.executeScript(tabs[0].id, {
      //   code: `document.body.style.backgroundColor = '${color}';${console.log("ek:::::")}; 
      //   for(var i =0;i<4;i++){console.log(i)}`
      // });
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
