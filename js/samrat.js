document.getElementById('form-samrat').addEventListener('submit', saveItem);
function saveItem(e){
    var items= document.getElementById('items').value;
   var date= document.getElementById('date').value;
   var price= document.getElementById('price').value;
    var expense= {
        items: items,
        date: date,
        price: price
    }
   

if(localStorage.getItem('samrat')==null){
    var samrat=[];
     samrat.push(expense);
     localStorage.setItem('samrat', JSON.stringify(samrat));
  
    
} else{
  
   var samrat = JSON.parse(localStorage.getItem('samrat'));
 
   samrat.push(expense);
   localStorage.setItem('samrat', JSON.stringify(samrat));
   console.log(samrat);
  
}
 e.preventDefault();
} 

function fetchSamrat(){
   var samrat = JSON.parse(localStorage.getItem('samrat'));
   var result = document.getElementById('total');


   result.innerHTML='';
   var totalSamrat=0;
   for(var i=0;i < samrat.length;i++){
       var items= samrat[i].items;
       var date= samrat[i].date;
       var price= samrat[i].price;
       totalSamrat+= parseFloat(price);
      
   
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
return totalSamrat;
result.innerHTML+=   '<div class="list-group">'+
  '<a href="#" class="list-group-item active">'+ 'Total ' +'<span class="glyphicon glyphicon-circle-arrow-right" aria-hidden="true">'+'</span>' +'&nbsp;' +'&nbsp;'+'Rs.'+totalSamrat+ '/-'+ '</a>'+ '</div>';

}