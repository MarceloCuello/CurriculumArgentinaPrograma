
document.body.onload = optimizarTexto();

window.addEventListener("resize", optimizarTexto);


function optimizarTexto() {

 if(window.outerWidth>=1200) {
    const collection = document.getElementsByClassName('redimensionable');
    for (let i =0; i<collection.length;i++) {  
         collection[i].style.fontSize = "large";
         collection[i].style.color= "#30373b";
         }
         document.getElementById('volver').hidden=1;
      }

 if(window.outerWidth<1199) {
    const collection = document.getElementsByClassName('redimensionable');
    for (let i =0; i<collection.length;i++) {  
            collection[i].style.fontSize = "medium";
            collection[i].style.color= "#30373b";
         }
            document.getElementById('volver').hidden=1;
      }


 if(window.outerWidth<768) {
   const collection = document.getElementsByClassName('redimensionable');
      for (let i =0; i<collection.length;i++) {  
            collection[i].style.fontSize = "small";
            collection[i].style.color= "#30373b";
         }
            document.getElementById('volver').hidden=1;
      }

 if(window.outerWidth<576) {
   const collection = document.getElementsByClassName('redimensionable');
      for (let i =0; i<collection.length;i++) {  
            collection[i].style.fontSize = "small";
            collection[i].style.color= "black";
         }
            document.getElementById('volver').hidden=0;
      }

if(window.outerWidth<350) {
   const collection = document.getElementsByClassName('redimensionable');
   for (let i =0; i<collection.length;i++) {  
            collection[i].style.fontSize = "xx-small";
            collection[i].style.color= "black";
         }

            document.getElementById('volver').hidden=0;
      }

}

