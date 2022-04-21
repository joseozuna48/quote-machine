const colors=[
    "#F1371F",
    "#5AA082",
    "#C91CB2",
    "#181A68",
    "#6258C7",
    "#7A4B2C",
    "#615886",
    "#56191F"
  ]

$(document).ready(function(){
  function generateColor(array){
    return array[Math.trunc(Math.random()*array.length)];
  }; 
  
  let newColor = generateColor(colors);  
  
  $("body,button").css("background-color",newColor);  
  $("i,#text,#author").css("color",newColor);    
  
  
  $("#new-quote").click(function(){
    newColor = generateColor(colors);
    $("body,button").css("background-color",newColor);  
    $("i,#text,#author").css("color",newColor);   


    $("#author").text(newColor);

    // $.getJSON("https://gist.github.com/54b659e43b1035215cd0ba1d4577ee80.git", function(data){
    //   console.log(data);
    // } )

  
  });
  

  });
  
  