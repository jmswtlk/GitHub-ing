/* writes the HTML for the left menu bar   */

var parms = document.getElementById('parms');
var parms = parms.innerHTML;
parms=parms.split(",");
parm1 = parseInt(parms[0]);
parm2 = parseInt(parms[1]); 

var itemArray = new Array;

setItemArray();

var lngth = itemArray.length+1;

/* -----    ------*/

var result = document.getElementById('wrap');
var div = document.createElement('div');

var itext1 = '<ul>';

/* ----  write menu items ---    */

var i;

for (i=0; i< itemArray.length; i++) {

if (parm1==i) {
    itext1+='<li><a class="active" href="">';
   }
else { 
    itext1+='<li><a class="button" href="';
    if (parm2==1 & (i == 6 || i > 8)) {
       itext1+= '../' + itemArray[i][0] +'">';
           }
    else {
           itext1+= itemArray[i][0] +'">';
      }
   }

itext1+= itemArray[i][1] +'</a></li>'
if (i == 6) { 
   itext1+='<br><br>';
  } 
}

/*  temporary pointer to Biz and Tech  */ 
itext1 += '<br><br><li><a class="button" href="https://tgsoc.org/biz/">Biz</a>'; 
itext1 += '<br><li><a class="button" href="https://tgsoc.org/tech/">Tech</a>'; 

itext1 +='</ul>';      

/* console.log(itext1); */

div.innerHTML = itext1;
result.appendChild(div);


function setItemArray (){
itemArray = [
['https://tgsoc.org', 'Home'],
['https://thomasgardnersociety.org', 'Main site'],
['https://thomasgardnerofsalem.blogspot.com', 'Context blog'],
['https://tgsoc.org/tech/', 'Technology blog'],
['https://www.facebook.com/ThomasGardnerofSalem', 'FB page'],
['https://thomasgardnersociety.org/devlog.html', 'Devlog'],
['https://tgsoc.org/Publications', 'Publications'],
['https://www.wikitree.com/wiki/Gardner-159', 'WikiTree'],
['https://thomasgardnersociety.org/html/search.html', 'Search'],
['https://tgsoc.org/ourRoll.html', 'Roll'],
['https://tgsoc.org/demo', 'Demo'],

];

}


