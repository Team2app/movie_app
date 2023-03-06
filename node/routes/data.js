var express = require('express');
var router = express.Router();
var fs = require('fs');
var mysql = require('mysql2');

/* GET users listing. */

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root@123',
    database:'movie_book'
});

router.get("/create", async (req,res)=>{
    var users = await readUsers();
    users.forEach(user => {
        connection.query(`insert into movie_book.movies values ( ${user.id}, '${user.title}', '${user.genres}', ${user.price}, ${user.rating}, '${user.runtime}', '${user.director}', '${user.posterUrl}', '${user.startdate}', '${user.enddate}', '${user.sold}' )`,(error,results,fields)=>{
           if (error) {
            return console.error(error.message); 
           }
        });
        console.log('user',user);
    })
    res.send("users added successfully");
});

router.get('/read', async (req,res)=>{
    var data = connection.query(`select * from movie_book.movies`, async (error,results,fields)=>{
        if (error) {
            return console.error(error.message); 
        }
        res.json(results);
    })
})

router.get('/data', async function(req, res, next) {
    var users = await readUsers();
    res.json(users);
});

function readUsers(){ 
    return new Promise((resolve,reject)=>{ 
        fs.readFile("./data/movies.json",(err,data)=>{ 
            var allUsers = JSON.parse(Buffer.from(data).toString()); 
            resolve(allUsers);
        }); 
    }) 
} 


// function writeUsers(Users){ 
//     return new Promise((resolve,reject)=>{ 
//         fs.writeFile("./data/data.json",JSON.stringify(Users),async (err,data)=>{ 
//             var allusers = await readUsers(); 
//             resolve(allusers); 
//         }); 
//     }) 
// } 

// router.get("/users",(req,res)=>{ 
//     connection.connect((err) => { 
//         if (err) { console.error('Error connecting: ' + err.stack); 
//         return; 
//     } 
//     console.log('Connected as thread id: ' + connection.threadId); 
//     }); 
//     res.send("Get is working !!!"); 
// }) 

module.exports = router;
