document.getElementById('form-sandesh').addEventListener('submit', saveItem);
function saveItem(e){
    var items= document.getElementById('items').value;
   var date= document.getElementById('date').value;
   var price= document.getElementById('price').value;
    var expense= {
        items: items,
        date: date,
        price: price
    }
   

if(localStorage.getItem('sandesh')==null){
    var sandesh=[];
     sandesh.push(expense);
     localStorage.setItem('sandesh', JSON.stringify(sandesh));
  
    
} else{
  
   var sandesh = JSON.parse(localStorage.getItem('sandesh'));
 
   sandesh.push(expense);
   localStorage.setItem('sandesh', JSON.stringify(sandesh));
   console.log(sandesh);
  
}
 e.preventDefault();
} 

function fetchSandesh(){
   var sandesh = JSON.parse(localStorage.getItem('sandesh'));
   var result = document.getElementById('total');


   result.innerHTML='';
   var totalSandesh=0;
   for(var i=0;i < sandesh.length;i++){
       var items= sandesh[i].items;
       var date= sandesh[i].date;
       var price= sandesh[i].price;
       totalSandesh+= parseFloat(price);
      
   
 //  result.innerHTML += '<div class="well">'+ '<h3>'+items+ '<br>' + date+ '<br>' + price + '</h3>' + '</div>';
 result.innerHTML+= '<table class="table table-bordered">' + '<tr>'+
    '<th>'+'Items'+'</th>'+
    '<th>'+'Date'+'</th>'+
    '<th>'+'Price'+'</th>'+
  '</tr>'+ '<tr>'+
    '<td>'+ items + '</td>'+
    '<td>'+ date+ '</td>'+
    '<td>'+'Rs.'+ price +'/-'+ '</td>'+
  '</tr>'+ '</table>';

 

}
return totalSandesh;
result.innerHTML+=   '<div class="list-group">'+
  '<a href="#" class="list-group-item active">'+ 'Total ' +'<span class="glyphicon glyphicon-circle-arrow-right" aria-hidden="true">'+'</span>' +'&nbsp;' +'&nbsp;'+'Rs.'+totalSandesh+ '/-'+ '</a>'+ '</div>';

}