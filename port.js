

var overbtn = document.getElementById("overbtn")
var probtn = document.getElementById("probtn")
var skillsbtn = document.getElementById("skillsbtn")




  document.getElementById('oplbtn').onclick = function() {
    var info1 = document.getElementById('port-info1id');
    var info2 = document.getElementById('port-info2id');
    var info3 = document.getElementById('port-info3id');
    var info4 = document.getElementById('port-info4id'); 
    if (info1.style.display === "none" || info1.style.display === "") {
        info1.style.display = "block";
        info2.style.display = "none";
        info3.style.display = "none"; 
        info4.style.display = "none"; 
    } else {
        info1.style.display = "none";
    }

    
}
document.getElementById('overbtn').onclick = function() {
  var info1 = document.getElementById('port-info1id');
  var info2 = document.getElementById('port-info2id'); 
  var info3 = document.getElementById('port-info3id');
  var info4 = document.getElementById('port-info4id'); 
  
  if (info2.style.display === "none" || info2.style.display === "") {
      info2.style.display = "block";
      info1.style.display = "none"; 
      info3.style.display = "none"; 
      info4.style.display = "none"; 
  } else {
      info2.style.display = "none"; 
  }
}

document.getElementById('probtn').onclick = function() {
  var info1 = document.getElementById('port-info1id');
  var info2 = document.getElementById('port-info2id');
  var info3 = document.getElementById('port-info3id'); 
  var info4 = document.getElementById('port-info4id');
  if (info3.style.display === "none" || info3.style.display === "") {
      info3.style.display = "block";
      info2.style.display = "none"; 
      info1.style.display = "none";
      info4.style.display = "none";
  } else {
      info3.style.display = "none"; 
  }
}

document.getElementById('skillsbtn').onclick = function() {
  var info1 = document.getElementById('port-info1id');
  var info2 = document.getElementById('port-info2id');
  var info3 = document.getElementById('port-info3id');
  var info4 = document.getElementById('port-info4id'); 
  
  if (info4.style.display === "none" || info4.style.display === "") {
      info4.style.display = "block";
      info3.style.display = "none"; 
      info1.style.display = "none";
      info2.style.display = "none";
  } else {
      info4.style.display = "none"; 
  }
}





