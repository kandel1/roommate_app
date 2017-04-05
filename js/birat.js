document.getElementById('form-birat').addEventListener('submit', saveItem);
function saveItem(e){
    var items= document.getElementById('items').value;
   var date= document.getElementById('date').value;
   var price= document.getElementById('price').value;
    var expense= {
        items: items,
        date: date,
        price: price
    }
   

if(localStorage.getItem('birat')==null){
    var birat=[];
     birat.push(expense);
     localStorage.setItem('birat', JSON.stringify(birat));
  
    
} else{
  
   var birat = JSON.parse(localStorage.getItem('birat'));
 
   birat.push(expense);
   localStorage.setItem('birat', JSON.stringify(birat));
   console.log(birat);
  
}
 e.preventDefault();
} 

function fetchBirat(){
   var birat = JSON.parse(localStorage.getItem('birat'));
   var result = document.getElementById('total');


   result.innerHTML='';
   var totalBirat=0;
   for(var i=0;i < birat.length;i++){
       var items= birat[i].items;
       var date= birat[i].date;
       var price= birat[i].price;
       totalBirat+= parseFloat(price);
      
   
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
return totalBirat;

result.innerHTML+=   '<div class="list-group">'+
  '<a href="#" class="list-group-item active">'+ 'Total ' +'<span class="glyphicon glyphicon-circle-arrow-right" aria-hidden="true">'+'</span>' +'&nbsp;' +'&nbsp;'+'Rs.'+totalBirat+ '/-'+ '</a>'+ '</div>';

} 