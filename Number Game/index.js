import inquirer from "inquirer";
//1)computer will generate a random number
//2)user input for guessing number
//3)compare user input with computer generated number and show result
const randomnumber = Math.floor(Math.random() * 10 + 1);
const answer = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "please guess a number between 1-10.",
    },
]);
if (answer.userGuessedNumber === randomnumber) {
    console.log("congratulation! you guessed a right number");
}
else {
    console.log("sorry! your answer is wrong");
}
