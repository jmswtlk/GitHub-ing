var dayArray = new Array("Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday");
var monthArray = new Array("January","February","March","April","May","June","July","August","September","October","November","December");
var lastUpdate = new Date(document.lastModified);
var thisDay=dayArray[lastUpdate.getDay()];
var thisDate=lastUpdate.getDate() < 10 ? '0'+lastUpdate.getDate() : lastUpdate.getDate();
var thisMonth=monthArray[lastUpdate.getMonth()];
var thisMonthNum=lastUpdate.getMonth()+1 < 10 ? '0'+ (lastUpdate.getMonth()+1) : lastUpdate.getMonth()+1;
var thisFullYear=String(lastUpdate.getFullYear());
var thisYear= thisFullYear.charAt(2) + thisFullYear.charAt(3);


var text1='<font color="white">Copyright: 2010-2020 algswtlk[at]TGSoc[dot]org';
text1 += '&nbsp;&nbsp;&nbsp;&nbsp;All Rights Reserved&nbsp;&nbsp;&nbsp;&nbsp;'; 
text1 += 'Last modified:&nbsp;' + thisMonth + '  ' + thisDate + ',&nbsp;' + thisFullYear + '.';
var text2 = '<br>The Thomas Gardner Society, Inc., a non-profit corporation, has IRS Sec. 501(c)(3) tax-exempt status.';
var text3 = '<br>Powered by:&nbsp;Web Hosting Hub, www.webhostinghub.com</font>';

var result = document.getElementById('foot');
var div = document.createElement('div');
div.innerHTML = text1 + text2 + text3;
result.appendChild(div);

