var prompt = require("prompt");

prompt.start();
prompt.get(["cellNumber"], function(error, result) {
    console.log('your answer is', result)
 console.log('thanks for that!')
});
