var square = document.querySelectorAll(".square");
var blah = document.querySelector("#blah");
var button = document.querySelector("#playagain");
var temp = document.querySelector("#temp");
var jumbo = document.querySelector(".jumbotron");

  var choose = null;





  function colors () {
  return Math.floor((Math.random() * 256) );
 } 

 function colorok()
 { return "rgb(" + colors() + ", " + colors() + ", " + colors() + ")" ;}

 var col=[];

 for( var i=0; i<6;i++)
 {col[i] = colorok();}

 function targetcoluor(){

 	var t= Math.floor(Math.random() * 6 );
 	return col[t];
  }
 var targetcolor = targetcoluor();
 blah.textContent= targetcolor;



 for( var i=0 ; i<square.length;  i++)
 {  
   square[i].style.background =  col[i];

 }

 for(  var i=0; i < square.length; i++)
 {
	   square[i].addEventListener("click", function()
	   { 
          choose = this.style.background;
            console.log(choose);
            if(choose !== targetcolor)
              {  this.style.background= "rgb(255, 255, 255)";
                   temp.textContent= "incorrect";
                 
              }      
            else
          	{  
              for( var i=0 ; i<square.length; i++)
                 {  
                  square[i].style.background = targetcolor;
                  } 
                  temp.textContent = "correct";
                  button.textContent="Play Again";
                  jumbo.style.background = targetcolor;


             }


           });
  }




button.addEventListener( "click", function()

 { button.textContent="New Colors";
   for( var i=0; i<6;i++)
   {col[i] = colorok();}
 
    targetcolor = targetcoluor();
    blah.textContent= targetcolor;

    for( var i=0 ; i<square.length;  i++)
   {  
   square[i].style.background =  col[i];

    }
    jumbo.style.background= "#e9ecef";
    temp.textContent = "status";
  } );

