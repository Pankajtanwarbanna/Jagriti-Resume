#!/usr/bin/env node
"use strict";

const chalk = require('chalk');
const figlet = require('figlet');
const clear = require('clear');

function main() {
    clear();
    console.log(
        chalk.yellow(
            figlet.textSync('Jagriti Aggarwal', { horizontalLayout: 'full' })
        )
    );  //resumeHandler();
}

main();

