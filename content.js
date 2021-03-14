// function getTextNodesIn(node, includeWhitespaceNodes) {
//     var text = [], nonWhitespaceMatcher = /\S/;

//     function getTextNodes(node) 
//     {
//         let next;
//         let child;
//         if(node.nodeType === 1 || node.nodeType === 9 || node.nodeType === 11)
//         {
//             for(var i = 0; i < node.childNodes.length; i++)
//             {
//                 child = node.childNodes[i];
//                 if (/SCRIPT|CODE|IMG|NOSCRIPT|STYLE|TEXTAREA/ig.test(child.nodeName) === false) 
//                 {
// 					getTextNodes(child.nodeValue);
// 				}
//             }
            
//         }
//         else if (node.nodeType === 3) {
//             if (includeWhitespaceNodes || nonWhitespaceMatcher.test(node.nodeValue)) 
//             {
//                 if(/[1-9¼½¾⅐⅑⅒⅓⅔⅕⅖⅗⅘⅙⅚⅛⅜⅝⅞]/g.test(node.nodeValue) === true)   //Has Digits
//                 {
//                    text.push(node); 
//                 }
//             }
//          }
//         // else {
//         //     for (var i = 0, len = node.childNodes.length; i < len; ++i) {
//         //         getTextNodes(node.childNodes[i]);
//         //     }
//         // }
//     }

//     getTextNodes(node);
//     return text;
// }

//console.log(getTextNodesIn(document.body, false));


var fractions = {
	'¼': 0.25,
	'½': 0.5,
	'¾': 0.75,
	'⅐': 0.1428,
	'⅑': 0.111,
	'⅒': 0.1,
	'⅓': 0.333,
	'⅔': 0.667,
	'⅕': 0.2,
	'⅖': 0.4,
	'⅗': 0.6,
	'⅘': 0.8,
	'⅙': 0.167,
	'⅚': 0.8333,
	'⅛': 0.125,
	'⅜': 0.375,
	'⅝': 0.625,
	'⅞': 0.875
};


var x = document.getElementsByTagName('p');
var biasRes="";
var paras = [];

for(var i = 0; i< x.length; i++)
{
    var str = x[i].innerText;
    processElement(str)
    paras.push(str);
}
console.log(paras);

function processElement(str)
{

}
//chrome.runtime.openOptionsPage()