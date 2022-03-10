const colors=[
    "#F71BDA",
    "#F1371F",
    "#5AA082",
    "#C91CB2",
   "#181A68",
    "#6258C7",
    "#7A4B2C",
    "#615886",
    "#56191F",
    "#D0E9AA"
  ]
  
  
  $(document).ready(function(){
    function generateColor(array){
     return array[Math.trunc(Math.random()*array.length)];
    }; 
    
    let newColor = generateColor(colors);  
    
    $("body").css("background-color",newColor);    
    
    
    $("i").css("color",newColor);
    $("button").css("background-color",newColor);
    $("#text").css("color",newColor);
    $("#author").css("color",newColor);
    
    
    
    $("#new-quote").click(function(){
      newColor = generateColor(colors);
      $("body").css("background-color",newColor); 
  
      
      $("i").css("color",newColor);
      $("button").css("background-color",newColor);
      $("#text").css("color",newColor);
      $("#author").css("color",newColor);
    
    });
    
  
  });
  
  