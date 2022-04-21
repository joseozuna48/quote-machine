const colors=[
    "#F1371F",
    "#5AA082",
    "#C91CB2",
    "#181A68",
    "#6258C7",
    "#7A4B2C",
    "#615886",
    "#56191F",
    "#A56233"
  ]

let quotes={};
let quote,text;


function quotesData(updateInfo){
  let req = new XMLHttpRequest();
  req.open("GET", "https://gist.githubusercontent.com/nasrulhazim/54b659e43b1035215cd0ba1d4577ee80/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json");

  req.onload = function(){  
    if(req.status==200){
      quotes = JSON.parse(this.responseText).quotes;
      updateInfo();
      
    }else{
      console("Error couldn't  retrieve data");
      
    }
  }
  req.send();
}

//Function that selects a random color from a given array.
function generateColor(array){
  return array[Math.trunc(Math.random()*array.length)];
}; 

function generateQuote(quotesList){
  const result = quotesList[Math.trunc(Math.random()*quotesList.length)];
  quote = result.quote;
  author = result.author;
}


function updateInfo(){
  let color = generateColor(colors);
  
  color = generateColor(colors);
  generateQuote(quotes); 

  $("body,button").css("background-color",color);  
  $("i,#text,#author").css("color",color);   

  $("#author").text(author);
  $("#text").text(quote);
}


$(document).ready(function(){
  //load json data and displays information on screen
  quotesData(updateInfo);
  //Selects a new quote and changes background color when button is pressed
  $("#new-quote").click(function(){
    updateInfo();
  });

});
  
  