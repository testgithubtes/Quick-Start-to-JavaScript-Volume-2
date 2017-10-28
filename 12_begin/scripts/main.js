/*  PLANNING A PROJECT:
-----------------------------------------------
1. What do you want to make?:
-----------------------------------------------

Create your own plan, or try the following:

1. Create a random number function that generates a random number within a certain range.  Introduce more randomness in the game using the function.

2. Generate a random scenario for the beginning or ending (maybe by using a switch statement that uses a random number as the parameter, and alerts a different scenario for each case, depending on the random number)

3. Create your own adventure game, pulling from the code we have written as a guide.

-----------------------------------------------
2. What steps do you think are necessary?
-----------------------------------------------



-----------------------------------------------
3. What syntax or coding patterns might you use?
-----------------------------------------------


-----------------------------------------------
Remember: There are many ways to create things with code! The most important part is to write it and get it working.  If you can't get something to work, try making it simpler.
After, look for ways you might improve your code!
*/

var randomNumber=Math.round(Math.random()*5);
var numberChoose= prompt("choose number");
while (numberChoose!= randomNumber){

  if(numberChoose<randomNumber){
    var numberChoose= prompt("choose another number biger");
  }else {
    var numberChoose= prompt("choose another number smaller");
  }
}
alert("great work the correct number is "+numberChoose);
