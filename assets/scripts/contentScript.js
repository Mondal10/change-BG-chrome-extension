// //put in manifest.json
// // "content_scripts": [
// //     {
// //         "matches": [
// //             "http://*/",
// //             "https://*/"
// //         ],
// //         "js": [
// //             "contentScript.js"
// //         ]
// //     }
// // ],


// // function getText() {
// //     return document.body.innerText
// // }
// function getHTML() {
//     return document.body.outerHTML
// }
// // console.log(getText());             //Gives you all the text on the page
// console.log(getHTML());             //Gives you the whole HTML of the page


// // chrome.extension.onMessage.addListener(
// //     function (request, sender, sendResponse) {
// //         if (request.method == "getText") {
// //             sendResponse({ data: document.all[0].innerText, method: "getText" }); //same as innerText
// //         }
// //     }
// // );

// let backgroundButtons = document.getElementsByClassName("backgroundButton");
// console.log(backgroundButtons);