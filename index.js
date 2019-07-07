#!/usr/bin/env node
"use strict";

var inquirer = require("inquirer");
const chalk = require('chalk');
const figlet = require('figlet');
const clear = require('clear');

var response = chalk.bold.blue;
var heading = chalk.bold.green;

var resume = require("./resume.json");

var resumePrompts = {
    type: "list",
    name: "resumeOptions",
    message: "What do you want to know about me?",
    choices: [...Object.keys(resume), "Exit"]
};

function clearAndPrintNameFunction() {
    clear();
    console.log(
        chalk.yellow(
            figlet.textSync('Jagriti Aggarwal', { horizontalLayout: 'full' })
        )
    );
}

function resumeFunction() {
    clearAndPrintNameFunction();
    inquirer.prompt(resumePrompts).then(answer => {
        if (answer.resumeOptions == "Exit") {
            console.log(chalk.blue('Okay Bye!'))
            return;
        }
        clearAndPrintNameFunction();
        var option = answer.resumeOptions;
        console.log(heading(option));
        console.log(response("--------------------------------------"));
        resume[`${option}`].forEach(info => {
            console.log(response("|  " + info));
        });
        console.log(response("--------------------------------------"));
        inquirer
            .prompt({
                type: "list",
                name: "exitBack",
                message: "Go back or Exit?",
                choices: ["Back", "Exit"]
            })
            .then(choice => {
                if (choice.exitBack == "Back") {
                    resumeFunction();
                } else {
                    return;
                }
            });
    });
}
// Clear Screen and Print Name with Chalk Function
clearAndPrintNameFunction();

// Resume Function
resumeFunction();

