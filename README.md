# Odin Rock Paper Scissors

* Course: [The Odin Project - Foundations Course](https://www.theodinproject.com/paths/foundations/courses/foundations)
* Exercise: [Foundations Course - Project: Rock Paper Scissors](https://www.theodinproject.com/lessons/foundations-rock-paper-scissors)

### Introduction
We’re going to make a simple implementation of grade-school classic “rock paper scissors”. If you don’t know what that is check the [Wikipedia article](https://en.wikipedia.org/wiki/Rock_paper_scissors) or [this](https://www.wikihow.com/Play-Rock,-Paper,-Scissors) detailed step-by-step. For the moment we’re just going to play the game from the browser console, but **we will revisit this project in a later lesson and add a Graphical User Interface with buttons and text**, so don’t forget to keep the code on GitHub!

## Assingment
1. Start a new Git repo for your project.
1. Create a blank HTML document with a script tag (Hint: it is best practice to link an external .js file). This game is going to be played completely from the console, so don’t worry about putting anything else in there.
1. Your game is going to play against the computer, so begin with a function called <code>getComputerChoice</code> that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’. We’ll use this function in the game to make the computer’s play. *Tip: use the console to make sure this is returning the expected output before moving to the next step!*
1. Write a function that plays a single round of Rock Paper Scissors. The function should take two parameters - the <code>playerSelection</code> and <code>computerSelection</code> - and then return a string that declares the winner of the round like so: <code>"You Lose! Paper beats Rock"</code>
   * Make your function’s playerSelection parameter case-insensitive (so users can input <code>rock</code>, <code>ROCK</code>, <code>RocK</code> or any other variation).
1. **Important note:** you want to <code>return</code> the results of this function call, *not* <code>console.log()</code> them. You’re going to use what you <code>return</code> later on, so let’s test this function by using console.log to see the results:
    <pre>
    function playRound(playerSelection, computerSelection) {
    // your code here!
    }
    
    const playerSelection = "rock";
    const computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));</pre>
1. Write a NEW function called <code>game()</code>. Use the previous function *inside* of this one to play a 5 round game that keeps score and reports a winner or loser at the end.
   * 123You have not officially learned how to “loop” over code to repeat function calls… if you already know about loops from somewhere else (or if you feel like doing some more learning) feel free to use them. If not, don’t worry! Just call your <code>playRound</code> function 5 times in a row. Loops are covered in the next lesson.
   * At this point you should be using <code>console.log()</code> to display the results of each round and the winner at the end.
   * Use <code>prompt()</code> to get input from the user. [Read the docs here if you need to](https://developer.mozilla.org/en-US/docs/Web/API/Window/prompt).
   * Feel free to re-work your previous functions if you need to. Specifically, you might want to change the return value to something more useful.
   * Feel free to create more “helper” functions if you think it would be useful.