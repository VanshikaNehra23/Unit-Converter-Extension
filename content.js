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
var x = document.getElementsByTagName('p');
var biasRes="";
var paras = [];

for(var i = 0; i< x.length; i++)
{
    var str = x[i].innerText;
    paras.push(str);
}
console.log(paras);