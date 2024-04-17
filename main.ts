import inquirer from "inquirer"

let myBalance = 10000; // Dollars
let myPinCode = 1111;

let pinCode = await inquirer.prompt(
    [
        {
            name: "pin",
            message: "Enter your pin",
            type: "number"
        }
    ]
);

if(pinCode.pin === myPinCode) {
    console.log("Correct Pin Code!!!"); 

    let operationAns = await inquirer.prompt(
        [
            {
                name: "accountType",
                message: "Select your account type",
                type: "list",
                choices: ["Current Account", "Saving Account"]
            },

            {
                name: "operation",
                message: "please select option",
                type: "list",
                choices: ["withdrawal", "fast cash", "check balance"]
            }
        ]
    );

    if(operationAns.operation === "withdrawal") {
        let amount = await inquirer.prompt(
            [
                {
                    name: "withdrawal",
                    message: "enter your amount",
                    type: "number"
                }
            ]
        );

        if(myBalance >= amount.withdrawal)
        
        {
        myBalance -= amount.withdrawal;
        console.log("Your remaining Balance is:" + myBalance)
        }
        else(
            console.log("Insufficient Balance")
        )
    }
    
    else if (operationAns.operation === "fast cash") {
        let fastCash = await inquirer.prompt(
            [
                {
                    name: "fastCash",
                    message: "Select your amount",
                    type: "list",
                    choices: ["1000", "3000", "5000", "10000"]
                }
            ]
        );

        myBalance -= fastCash.fastCash;
        console.log("Your remaining balance is:" + myBalance)
    }

     else if(operationAns.operation === "check balance"){
        console.log("Your Balance is:" + myBalance)
    }
}

else {
    console.log("Incorrect Pin Code")
}