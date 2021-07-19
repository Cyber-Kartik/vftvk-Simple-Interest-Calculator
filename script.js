function calculate()
{
  var p = document.getElementById ("principal").value;
  if(p==""){
  
    alert("Please enter a positive number");
   
    document.getElementById("principal").focus();
  }else{


var dep = document.getElementById("dep");

dep.innerHTML ="If you deposit " + "<span class='highlight'>" + p + "</span>" +",";

var t = document.getElementById ("myRange").value;
var rt = document.getElementById("rt");
rt.innerHTML ="at an interest rate of " + "<span class='highlight'>" + t + "</span>" +"%.";


var r = document.getElementById ("cmbitems").value;
var cur_yr = new Date().getFullYear();
var year = parseInt(cur_yr)+ parseInt(r);
var yr = document.getElementById("yr");
yr.innerHTML ="in the year <span class='highlight'>" + year + "</span>.";

var result = document.getElementById("result");
result.innerHTML = "You will receive an amount of  " +  "<span class='highlight'>" +  ((p*t*r)/100 ) + "</span>";
}
}
function alrt()
{
  var p = document.getElementById ("principal").value;
  


if(parseInt(p)==0 || parseInt(p)<0){
  
  alert("Please enter a positive number");
  document.getElementById("principal").value='';
  document.getElementById("principal").focus();
}


}


var slider = document.getElementById("myRange");
var output = document.getElementById("demo") ;
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
}
