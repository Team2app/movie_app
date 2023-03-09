var express = require('express');
var router = express.Router();
var fs = require('fs');
var mysql = require('mysql2');

/* GET users listing. */

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root@123',
    database: 'movie_book'
});

router.get('/users', async function (req, res, next) {
    connection.query('SELECT * FROM movie_book.users', function (err, rows, fields) {
        if (err) {
            return console.error(err.message);
        }
        res.json(rows);
    })
});

// router.put('/users/:id', async function (req, res, next) {
//     let id = req.params.id;
//     var oldPass = req.body.password;
//     var newPass = req.body.password1;
//     var data = connection.query(`select * from movie_book.movies`, async (error, results, fields) => {
//         var realUser;
//         if (error) {
//             return console.error(error.message);
//         }

//         results.forEach(user => {
//             if (user.email === id) {
//                 let bufferObj = Buffer.from(user.password, "base64");
//                 let decodedString = bufferObj.toString("utf8");
//                 user.password = JSON.parse(decodedString);
//                 realUser = user;
//             }
//         });
//         if (realUser.password === oldPass) {
//             realUser.password = newPass;
//             let pass = realUser.password;
//             let password = JSON.stringify(pass);
//             let bufpassword = Buffer.from(password, "utf8");
//             let encodedPassword = bufpassword.toString('base64');
//             connection.query(`update movie_book.users set password = '${encodedPassword}' where email = '${id}'`, function (err, rows, fields) {
//                 if (err) {
//                     return console.error(err.message);
//                 }
//                 res.send("updated successfully");
//             })
//         }
//         else {
//             res.send("wrong password");
//         }
//     })
// })

router.post('/sign', async function (req, res, next) {
    var body = JSON.parse(req.body.body);
    connection.query(`insert into movie_book.users values ('${body.email}', '${body.password}', 'inactive')`, function (err, rows, fields) {
        if (err) {
            return console.error(err.message);
        }
        res.send("added successfully");
    })
})

router.get("/create", async (req, res) => {
    var users = await readUsers();
    users.forEach(user => {
        let originalStrin = user.sold;
        let originalString = JSON.stringify(originalStrin);

        connection.query(`insert into movie_book.movies values ( ${user.id}, '${user.title}', '${user.genres}', ${user.price}, ${user.rating}, '${user.runtime}', '${user.director}', '${user.posterUrl}', '${user.startdate}', '${user.enddate}', '${originalString}' )`, (error, results, fields) => {
            if (error) {
                return console.error(error.message);
            }
        });
    })
    res.send("users added successfully");
});

router.get('/read', async (req, res) => {
    connection.query(`select * from movie_book.movies`, async (error, results, fields) => {
        if (error) {
            return console.error(error.message);
        }

        results.forEach(user => {
            user.sold = JSON.parse(user.sold);
        });
        res.json(results);
    })
})

router.get('/data', async function (req, res, next) {
    var users = await readUsers();
    res.json(users);
});

function readUsers() {
    return new Promise((resolve, reject) => {
        fs.readFile("./data/movies.json", (err, data) => {
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
