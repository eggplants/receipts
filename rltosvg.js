#!/usr/bin/node

// $ npm -g install receiptline
// $ ./rltosvg <cpl int> <encoding> <import filepath> <export filepath>

// print args
// console.log(process.argv);
const args = process.argv;
if (args.length !== 6) throw 'Err: arg.length == 5';

// read lib
const receiptline = require('receiptline');
const fs = require('fs');

// configrate
const option = {
    cpl: parseInt(args[2]),
    encoding: args[3],
    upsideDown: false,
    gamma: 1.8,
    command: 'svg'
};

// import
const input = fs.readFileSync(args[4], 'utf8').toString();

// compile
const data = receiptline.transform(input, option);

// export
fs.writeFile(args[5], data, {flag: 'w'}, (err) => {
  if (err) throw err + "\nErr: export";
  console.log('Success.');
});
