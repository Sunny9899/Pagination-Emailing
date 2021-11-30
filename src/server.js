const app = require("./index");

const connect=require("./configs/db");

app.listen(2345,async function(){
    await connect();
    console.log("Listening on 2345");
})