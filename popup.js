let buttons = document.getElementsByTagName("button");

for(let button of buttons){
  button.addEventListener('click',(element)=>{
    // console.log("helooo",element.target.style.backgroundColor);
    let color = element.target.style.backgroundColor;
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
      chrome.tabs.executeScript(tabs[0].id, {
        code: `document.body.style.backgroundColor = '${color}';`
        //document.body.style.color = '${color}';`
      });
    });
  });
}
