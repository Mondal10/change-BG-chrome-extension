let buttons = document.getElementsByTagName("button");

for(let button of buttons){
  // console.log(button);
  button.addEventListener('click',(element)=>{
    console.log("helooo",element.target.id);
    let color = element.target.id;
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
      chrome.tabs.executeScript(tabs[0].id, {
        code: `document.body.style.backgroundColor = '${color}';`
        //document.body.style.color = '${color}';`
      });
    });
  });
}
