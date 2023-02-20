var express = require('express');
var router = express.Router();
var fs = require('fs');

/* GET users listing. */
router.get('/data', async function(req, res, next) {
    var users = await readUsers();
    res.json(users);
});

function readUsers(){ 
    return new Promise((resolve,reject)=>{ 
        fs.readFile("./data/data.json",(err,data)=>{ 
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
