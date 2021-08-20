import { parser } from './src/parser';

const args: string[] = process.argv;
console.log(parser(args[2]));