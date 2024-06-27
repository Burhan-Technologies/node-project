import inquirer from "inquirer"
let currencyvalue: {[key:string]: number}={
    PKR:281.08,
    SAR:3.75,
    UAE:3.67,
    USD:1
}

let answer = await inquirer .prompt([
    {
        type:"list",
        name:"from",
        message:"converting from",
        choices:["PKR","SAR","UAE","USD"]
    },
    {
        type:"list",
        name:"to",
        message:"converting to",
        choices:["PKR","SAR","UAE","USD"]
    },
    {
        type:"number",
        name:"amount",
        message:"Your amount to convert"
    }
])
console.log(currencyvalue[answer.to]/currencyvalue[answer.from]*answer.amount);