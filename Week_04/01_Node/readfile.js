// // Program to read file to count number of lines of file

import fs from "fs";
import { Command } from "commander";
const program = new Command();

program
  .name("Counter")
  .description("CLI to do some files based tasks")
  .version("0.8.0");

program
  .command("countwords")
  .description("Count the number of lines in a file")
  .argument("<file>", "file to count lines")
  .action((file) => {
    fs.readFile(file, "utf-8", (err, data) => {
      let total = 0;
      if (err) {
        console.log(err);
      } else {
        for (let i = 0; i < data.length; i++) {
          if (data[i] == " ") {
            total++;
          }
        }
      }
      console.log("Total words in file are : ", total + 1);
    });
  });

program
  .command("countlines")
  .description("Count the number of lines in a file")
  .argument("<file>", "file to count lines")
  .action((file) => {
    fs.readFile(file, "utf-8", (err, data) => {
      let total = 0;
      if (err) {
        console.log(err);
      } else {
        const sentences = data.split("\n").length;
        console.log(`There are ${sentences} sentences in the ${file} file`);
      }
    });
  });

program.parse();
