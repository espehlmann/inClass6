// ADD NEW ITEM TO END OF LIST
var uls = document.getElementsByTagName('ul');
var node = document.createElement('li');
var textnode = document.createTextNode("cream");
node.appendChild(textnode);
uls[0].appendChild(node);

// ADD NEW ITEM START OF LIST
var newItem = document.createElement('li');
var textnode2 = document.createTextNode("kale");
newItem.appendChild(textnode2);
uls[0].insertBefore(newItem, uls[0].childNodes[0]);    

// ADD A CLASS OF COOL TO ALL LIST ITEMS
var el = document.getElementsByTagName('li');
  var i;
  for (i = 0; i <el.length; i++)
  {
    el[i].setAttribute('class', 'cool');
  }

// ADD NUMBER OF ITEMS IN THE LIST TO THE HEADING
  var j = el.length;

  var div1 = document.createElement('div');
  var divSib = document.getElementsByTagName('h2');
  div1.setAttribute('style', 'display: inline; font-size: 12px; background-color: black; border-radius: 10px; padding-left: 5px; vertical-align: middle;');
  div1.appendChild(document.createTextNode(j));
  divSib[0].insertAdjacentElement("beforeend", div1);
