function* upper(items) {
    for (var el of items) {
        try {
            yield el.toUpperCase();
        } catch (e) {
            yield null;
        }
    }
}

var bad_items = ['a', 'B', 1, 'c'];

for (var item of upper(bad_items)) {
    console.log(item);
}

//module.exports = upper;
