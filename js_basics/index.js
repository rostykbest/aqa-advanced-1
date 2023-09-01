//const { name } = require("./test");

//console.log(name);

import chalk from "chalk";

const hello = chalk.bgCyan("Hello World!");

const hello2 = chalk.hex("#DEADED").underline("Hello, world!");

console.log(hello);
console.log(hello2);
