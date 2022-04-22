const express = requeir('express');
const app= express();
const port = process.env.PORT || 5000;
app.get ('/',(req,res)=>{
    res.send('Running my node crud  server')
})