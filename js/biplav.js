document.getElementById('form-biplav').addEventListener('submit', saveItem);
function saveItem(e){
    var items= document.getElementById('items').value;
   var date= document.getElementById('date').value;
   var price= document.getElementById('price').value;
    var expense= {
        items: items,
        date: date,
        price: price
    }
   

if(localStorage.getItem('biplav')==null){
    var biplav=[];
     biplav.push(expense);
     localStorage.setItem('biplav', JSON.stringify(biplav));
  
    
} else{
  
   var biplav = JSON.parse(localStorage.getItem('biplav'));
 
   biplav.push(expense);
   localStorage.setItem('biplav', JSON.stringify(biplav));
   console.log(biplav);
  
}
 e.preventDefault();
} 

function fetchBiplav(){
   var biplav = JSON.parse(localStorage.getItem('biplav'));
   var result = document.getElementById('total');


   result.innerHTML='';
   var totalBiplav=0;
   for(var i=0;i < biplav.length;i++){
       var items= biplav[i].items;
       var date= biplav[i].date;
       var price= biplav[i].price;
       totalBiplav+= parseFloat(price);
      
   
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
return totalBiplav;
result.innerHTML+=   '<div class="list-group">'+
  '<a href="#" class="list-group-item active">'+ 'Total ' +'<span class="glyphicon glyphicon-circle-arrow-right" aria-hidden="true">'+'</span>' +'&nbsp;' +'&nbsp;'+'Rs.'+totalBiplav+ '/-'+ '</a>'+ '</div>';

} 