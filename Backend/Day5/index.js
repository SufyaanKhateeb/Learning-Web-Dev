const fs = require("fs");
const { argv } = require("process");
const yargs = require("yargs");

//-------------------simple example-------------------
if (argv.length > 2) {
  if (argv[2] == "writeFile") {
    fs.writeFileSync(argv[3], argv[4]);
    console.log("File written");
  } else if (argv[2] == "deleteFile") {
    fs.unlinkSync(argv[3]);
    console.log("File deleted");
  }
}else{
    console.log(`Use the command:\n\tnode index.js (operation) (filename) *("filecontent")\noperation:\n\twriteFile: write file\n\tdeleteFile: delete file\nfilename: name of the file\n*: If needed`);
}

//-------------------little complex example--------------------
// const argvs = yargs
//   .command("writeFile", "Create a file.", {
//     fileName: {
//       description: "This option creates a file if it does not already exist.",
//       alias: "n",
//       type: "string",
//     },
//     content: {
//       description: "This option adds content to the file.",
//       alias: "c",
//       type: "string",
//     },
//   })
//   .command("deleteFile", "Delete a file", {
//     fileName: {
//       description: "This option deletes the file.",
//       alias: "n",
//       type: "string",
//     },
//   })
//   .help().argv;

// if (argvs._.includes("writeFile")) {
//   if (argvs.fileName && argvs.content) {
//     fs.writeFileSync(argvs.n, argvs.c);
//     console.log("File written");
//   }
// } else if (argvs._.includes("deleteFile")) {
//   if (argvs.n) {
//     fs.unlinkSync(argvs.n);
//     console.log("File deleted");
//   }
// }
