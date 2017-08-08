var inputs = process.argv.slice(2);
 var result = inputs.map((e) => e[0])
                    .reduce((prev, current) => prev+current);
 console.log(result);
