#! /usr/bin/env node
// © 2024 - BestDeveloper - BestMat, Inc. - All rights reserved.
const { exec } = require("child_process");
const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question("Enter the Java File to run: ", function(file){
    exec(`javac ${file} && java ${file}`, function(error, stdout, stderr){
        if (error) throw new Error(`BestServer Error: ${error}`);

        console.log(stdout);
    });
});