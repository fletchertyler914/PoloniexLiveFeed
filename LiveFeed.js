javascript:(function()%7Bfunction callback()%7B(function(%24)%7Bvar jQuery%3D%24%3BsetInterval(function()%7B%24('%23buyRate').val(document.title.substr(0%2Cdocument.title.indexOf(' ')))%3B%24('%23sellRate').val(%24('%23asksTableBody tr%3Afirst td.orderRate').text())%3B%7D%2C1000)%7D)(jQuery.noConflict(true))%7Dvar s%3Ddocument.createElement("script")%3Bs.src%3D"https%3A%2F%2Fajax.googleapis.com%2Fajax%2Flibs%2Fjquery%2F1.7.1%2Fjquery.min.js"%3Bif(s.addEventListener)%7Bs.addEventListener("load"%2Ccallback%2Cfalse)%7Delse if(s.readyState)%7Bs.onreadystatechange%3Dcallback%7Ddocument.body.appendChild(s)%3B%7D)()
