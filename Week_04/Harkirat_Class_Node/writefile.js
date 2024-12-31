import fs from "fs";
import { Command, program } from "commander";
const Program = new Command();

// Program to write a file as a todo app

Program.name("Todo App")
  .description("Handle the actions of Todo App")
  .version("0.8.0");

program
  .command(`addtodo`)
  .description("Add the task to the todo list")
  .argument("<file>", "App to add todos")
  .action((text) => {
    fs.appendFile("hello.txt", text + "\n", (err) => {
      if (err) {
        console.log(err);
      }
    });
  });

program.parse();
