const fs = require("fs");
const { command, program} = require("commander");

program
.name("todo")
.description("todo cli")
.version("1.0.0.0");

program.command(addTodo)
.description("add to do:")
.argument("<file>", "jsonfile")
.action((file)=>{
    fs.writefile
})