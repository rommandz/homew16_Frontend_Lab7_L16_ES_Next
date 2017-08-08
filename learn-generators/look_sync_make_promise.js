function askFoo() {
    return new Promise(function(resolve, reject) {
        resolve('foo');
    });
}

function run(generator) {
    var it = generator();

    function go(res) {
        return res.value.then(function(val) {
            it.next(val);
        }, function(error) {
            it.next(error);
        });
    }
    go(it.next());
}

run(function*() {
    try {
        var foo = yield askFoo();
        console.log(foo);
    } catch (e) {
        console.log(e);
    }
});

// module.exports = {
//     askFoo: askFoo,
//     run: run
// };
