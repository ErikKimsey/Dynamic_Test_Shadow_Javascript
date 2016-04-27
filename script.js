'use strict';

//
//

window.onmousemove = (function(event){

    
    var mx = event.clientX;
    var my = event.clientY;
    
    //get last digit of MX
//    var mxS = mx.toString();
//    var mxSLen = mxS.length;
//    var lastDig = mxS.charAt(mxSLen-1);
//    console.log(mx, mxSLen, parseInt(lastDig));
    
    
    //Get last digit of MY
//    var myS = my.toString();
//    var mySLen = myS.length;
//    var lastYDig = myS.charAt(mySLen-1);
//    console.log(my, mySLen, parseInt(lastYDig));
    
    //Get and Set H1's shadow
    var h1 = document.getElementsByName('h1');
    var xShad, yShad;
//    console.log(xShad);
    
    
    function calcXShad(){
         if(mx >= (window.innerWidth/2)){
             xShad = Math.round((mx/window.innerWidth)*10)-5;
         } else if(mx < (window.innerWidth/2)){
             xShad = "-" + (Math.round((mx/window.innerWidth)*(-10)+5));
         }
        console.log("xShad =" + xShad);
        console.log("mx = " + mx);
        console.log("window.innherwidth = " + (window.innerWidth/2));
        return xShad;
    }
    
    calcXShad();
    
    function calcYShad(){
         if(my >= (window.innerHeight/2)){
             yShad = Math.round((my/window.innerHeight)*10)-5;
         } else if(my < (window.innerHeight/2)){
             yShad = "-" + (Math.round((my/window.innerHeight)*(-10)+5));
         }
        console.log("yShad =" + yShad);
        console.log("my = " + my);
        console.log("window.innerHeight = " + (window.innerHeight/2));
        return yShad;
    }
    
    calcYShad();
    
    
    
    for(var i=0; i < h1.length; i++){ 
        h1[i].style.textShadow = "" + xShad + "px " + yShad + "px 4px rgb(44,44,44)";
    }
    

});
