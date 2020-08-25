/*

function theBeatlesPlay(musicians, instruments) {
  
  var emptyArray = [];
  var emptyString = "";

  for (var i = 0; i < musicians.length; i++) {
    emptyString = musicians[i] + " plays " + instruments[i];
    emptyArray.push(emptyString) 
  }
  
  return emptyArray;
  
  
}
  


function johnLennonFacts(lennonArray){
  
  var myString = '';
  var myArray = [];


  var i = 0;
  while(i < lennonArray.length) {
    
    myString = (lennonArray[i] + '!!!');


    
    myArray.push(myString);
    i++;
}
  return myArray;

}



*/

function johnLennonFacts(number){
  
  var emptyArrayTwo = [];
  var i = 0;

  if (number < 15){
  
      do{
          i++;
          
          emptyArrayTwo += "I love the Beatles!"
  
      
      
      } while(i < number)
  
    return emptyArrayTwo;
  }
  
}



