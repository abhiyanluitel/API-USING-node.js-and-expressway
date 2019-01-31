const express = require('express');
const mysql= require('mysql');

var connect= mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database:'user'

    
});
connection.connect(function(error){
    if(!!error){
        document.write('ERROR');
    }
    else{
        document.write('connected');
    }
});
app.get('/users', function( req, res){
    res.send()
})


app.listen(1300);