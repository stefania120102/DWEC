window.onload()=function(){
    document.getElementById("partido").addEventListener("change",anyado_partido()); //y esto
}

function anyado_partido(){
    var options=document.getElementsByTagName("option"); //buscar que hacee esto
    console.log(options);
    for(var i=0; i<options.length;i++){
        var escanyos =options[i].getAttribute("escanyos"); //y esto
        //span.style.width =escaños + "px"  esto sin jquery  ----con-> buscar option: selected , .attr, .text ---partido.style.display="inline-block" partido.style.width=(escanyos*2)+"px";
        console.log(escanyos);
    }
}