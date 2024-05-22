const express = require('express');


const app = express();


const setupAndStartServer = async()=>{
    app.listen(3000, ()=>{
        console.log("Server Started");
    });
}

setupAndStartServer();

