


document.addEventListener("mousemove", function() {
    animar("animacion1");
    animar("animacion2");
    animar("animacion3");
    animar("animacion4");
    crecer("crecimiento");
});


function animar(ident){

  if(window.outerWidth>768){  
    document.getElementById(ident).addEventListener("mouseover", function(){
    
     document.getElementById(ident).className="movimiento letra_naranja";
    
    });

    document.getElementById(ident).addEventListener("mouseleave", function(){
    
        document.getElementById(ident).className="animadoRelease letra_naranja";
       
       });
    } 
    else {
    document.getElementById(ident).className="letra_naranja";
    }}


function crecer(identidad){

        document.getElementById(identidad).addEventListener("mouseover", function(){
    
            document.getElementById(identidad).style.scale="1.1"; });


        document.getElementById(identidad).addEventListener("mouseleave", function(){
    
            document.getElementById(identidad).style.scale="1"; });

}
