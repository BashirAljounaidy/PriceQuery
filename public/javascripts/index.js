inames = []
iqtyp = []
iprice = []
ipoints = []
iserve= []

function getSelectValue(){
}

function addItem(){
  

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
  var Wanted=0
  Wanted = parseInt(document.getElementById('Want').value);
  profit=0;
  cartdata = '<table><tr><th>المنتج</th><th>العدد</th><th>النقاط</th><th>حذف</th></tr>';
  
  totalPrice = 0;
  totalPoints=0;
  totalserve=0;
  total=0
  for (i=0; i<inames.length; i++){
    totalPrice += iqtyp[i] * iprice[i]
    totalPoints += iqtyp[i] * ipoints[i]
    totalserve += iserve[i]
    cartdata += "<tr><td>" + inames[i] + "</td><td>" + iqtyp[i] + "</td><td>"+ iqtyp[i] * ipoints[i]+ "</td><td><button onclick='delElement(" + i + ")'>Delete</button></td></tr>"
  }
  rank = document.getElementById('ranklist').value;
  if(totalserve>=70 &&rank=='nd' ) totalserve-=30;
  if(rank=='as' || rank=='s') totalserve+=20;
  total=totalPrice+totalserve+deliveryPrice1;
  profit= Wanted-total;
  befor=Wanted-total;
  if(inames.length>0){
  cartdata += '<tr><td>التوصيل</td><td>' + deliveryPrice1 + '</td><td></td></tr>'
  cartdata += '<tr><td>التكلفة الاجمالية</td><td>' + total+ '</td><td>' + totalPoints + '</td></tr>'
  cartdata += '<tr><td>سعر البيع</td><td>' + Wanted+ '</td><td></td></tr>'
  cartdata += '<tr><td>الربح </td><td>' + profit+ '</td><td></td></tr></table>'
  document.getElementById('cart').innerHTML = cartdata;
  }
  else
  {
    document.getElementById('cart').innerHTML = "اضف منتجات من الاعلى";
  }
}


function delElement(a){
  inames.splice(a, 1);
  iqtyp.splice(a, 1)
  iprice.splice(a, 1)
  ipoints.splice(a, 1)
  iserve.splice(a, 1)
  displayCart()
}
