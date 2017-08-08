var rawArgs = process.argv.slice(2);
var args = [];

rawArgs.forEach(val => {
  let commaSep = val.split(',');
  commaSep.forEach(val => {
    if(val !== '') args.push(+val);
  });
});

const avg = (...args) => args.reduce((prev, next) => prev + next, 0) / args.length;

console.log(avg(...args));

//module.exports = avg;
