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
        console.log('ERROR');
    }
    else{
        console.log('connected');
    }
});

app.get('/users', function( req, res){
    res.send()
})

app.get('/users/id/post', function( req, res){
    res.send()
})

app.get('/posts', function( req, res){
    res.send()
})

app.get('/users/posts/id/users', function( req, res){
    res.send()
})


app.listen(1300);