var prompt = require("prompt");

var store = ''

prompt.start();
prompt.get(["move"], function(error, result) {
    console.log('your answer is', result.move)
 console.log('thanks for that!')
});

console.log(store)
