inames = []
iqtyp = []
iprice = []
ipoints = []
iserve= []


function getSelectValue(){
  var Code = document.forms['frm'].elements['list'].options[document.forms['frm']
  .elements['list'].selectedIndex].getAttribute('re');
console.log("Val of ren " + Code); //x or y
}

function addItem(){
  
  console.log(deliveryPrice);
  var rank = document.getElementById('ranklist').value;
  var retailPrice = document.forms['frm'].elements['list'].options[document.forms['frm']
  .elements['list'].selectedIndex].getAttribute(rank);
  var points = document.forms['frm'].elements['list'].options[document.forms['frm']
  .elements['list'].selectedIndex].getAttribute("cc");
  var shipping = document.forms['frm'].elements['list'].options[document.forms['frm']
  .elements['list'].selectedIndex].getAttribute("sh");
  inames.push(document.getElementById('list').value);
  iqtyp.push(parseInt(document.getElementById('pqty').value))
  iprice.push(parseFloat(retailPrice).toPrecision(2))
  ipoints.push(parseFloat(points))
  iserve.push(parseInt(shipping))
  
  displayCart()
   
}

function displayCart(){
  deliveryPrice1=0;
  deliveryPrice1 = parseInt(document.getElementById('deliveryPrice').value);
  cartdata = '<table><tr><th>المنتج</th><th>العدد</th><th>السعر</th><th>المجموع</th><th>النقاط</th><th>حذف</th></tr>';
  
  totalPrice = 0;
  totalPoints=0;
  totalserve=0;
  total=0
  for (i=0; i<inames.length; i++){
    totalPrice += iqtyp[i] * iprice[i]
    totalPoints += iqtyp[i] * ipoints[i]
    totalserve += iserve[i]
    cartdata += "<tr><td>" + inames[i] + "</td><td>" + iqtyp[i] + "</td><td>" + iprice[i] + "</td><td>" + iqtyp[i] * iprice[i] + "</td><td>"+ iqtyp[i] * ipoints[i]+ "</td><td><button onclick='delElement(" + i + ")'>Delete</button></td></tr>"
  }
  total=totalPrice+totalserve+deliveryPrice1;
  cartdata += '<tr><td>التوصيل</td><td></td><td></td><td>' + deliveryPrice1 + '</td><td></td></tr>'
  cartdata += '<tr><td>الشحن والمصاريف</td><td></td><td></td><td>' + totalserve + '</td><td></td></tr>'
  cartdata += '<tr><td></td><td></td><td></td><td>' + total+ '</td><td>' + totalPoints + '</td></tr></table>'
  document.getElementById('cart').innerHTML = cartdata
  
}


function delElement(a){
  inames.splice(a, 1);
  iqtyp.splice(a, 1)
  iprice.splice(a, 1)
  displayCart()
}