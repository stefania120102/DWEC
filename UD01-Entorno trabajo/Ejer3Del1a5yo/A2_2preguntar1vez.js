
tiempo();

function tiempo(){
    var time = setTimeout(fechaActual, 20000);
  
}

function fechaActual(){
    var f = new Date();
document.write("La fecha de hoy es: " + f.getDate() + "/" + (f.getMonth() +1) + "/" + f.getFullYear());
clearTimeout(time);
}

