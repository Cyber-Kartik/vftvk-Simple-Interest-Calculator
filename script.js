function calculate()
{

var p = document.getElementById ("principal").value;
var t = document.getElementById ("myRange").value;
var r = document.getElementById ("txtprice").value;
var result = document.getElementById("result");
result.innerHTML = "The interest is " + ((p*t*r)/100 );

}


var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
}
var select = document.getElementById('cmbitems');
var input = document.getElementById('txtprice');
select.onchange = function() {
    input.value = select.value;
}
