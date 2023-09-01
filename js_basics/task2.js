import chalk from "chalk";

const hello = chalk.bgCyan("Hello World!");

const hello2 = chalk.hex("#DEADED").underline("Hello, world!");

const hello3 = chalk.rgb(15, 100, 204).inverse("Hello!");

console.log(hello);
console.log(hello2);
console.log(hello3);
