const express = require("express");
const cors = require('cors');
const app = express();
const port = 3001;
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const url = 'mongodb://localhost:27017/myautomobiledb';


// Create a new MongoClient
const client = new MongoClient();

//   const db = client.db(dbName);
// const collection = db.collection('documents');
// collection.find({}).toArray(function (err, result) {
//     console.log('Found the results...');
//     console.log(result)
// })

// collection.updateOne({a:2},{$set:{b:1}},function(err,result){
//     if(err){
//         throw err;
//     }
//     console.log('One record updated')
// })

// collection.deleteOne({a:2},function(err,result){
//     if(err){
//         throw err;
//     }
//     console.log('One record removed')
// })



app.use(cors());
app.use(express.json());       // to support JSON-encoded bodies
app.use(express.urlencoded()); // to support URL-encoded bodies

app.get('/', (req, res) => {
    res.send("Welcome to new auto-mobile store")
})


//fetcing users
app.get('/users', function (req, res) {
    console.log("request recieved...")
    client.connect(url, function (err, db) {
        if (err) {
            throw err;
        }
        const collection = db.collection('users');
        collection.find({}).toArray(function (err, result) {
            //console.log("results found...",result)
            res.send(result)
        })
        db.close()
    })
})

//registration
app.post('/signUp', function (req, res) {
    // console.log("request recieved...",req.body)
    client.connect(url, function (err, db) {
        if (err) {
            throw err;
        }
        console.log("connected to db")
        const collection = db.collection('users');
        collection.insertOne(req.body, function (err, success) {
            if (err) {
                res.send("Something went wrong while inserting doc")
                throw err;
            }
            else {
                res.send({ success: "Document has been inserted successfully." })
            }

            db.close();
        })
    })
})

//changepassword
app.post('/changepassword', function (req, res) {
    // console.log("request recieved...",req.body)
    client.connect(url, function (err, db) {
        if (err) {
            throw err;
        }
        const collection = db.collection('users');
        collection.updateOne({ email: req.body.email }, { $set: { password: req.body.password } }, function (err, success) {
            if (err) {
                res.send("Something went wrong while inserting doc")
                throw err;
            }
            else {
                res.send({ success: "Password has been changed successfully." })
            }

            db.close();
        })
    })
})

//user appointment
app.post('/appointment', function (req, res) {
    // console.log("request recieved...",req.body)
    client.connect(url, function (err, db) {
        if (err) {
            throw err;
        }
        console.log("connected to db")
        const collection = db.collection('appointment');
        collection.insertOne(req.body, function (err, success) {
            if (err) {
                res.send("Something went wrong while inserting doc")
                throw err;
            }
            else {
                res.send({ success: "Appointment has been created successfully." })
            }

            db.close();
        })
    })
})

//fetching appointments
app.get('/appointments', function (req, res) {
    console.log("request recieved...")
    client.connect(url, function (err, db) {
        if (err) {
            throw err;
        }
        const collection = db.collection('appointment');
        collection.find({}).toArray(function (err, result) {
            //console.log("results found...",result)
            res.send(result)
        })
        db.close()
    })
})

//remove appointments
app.delete('/removeAppointment', function (req, res) {
    console.log("request recieved...",req.body)
    client.connect(url, function (err, db) {
        if (err) {
            throw err;
        }
        const collection = db.collection('appointment');
        collection.deleteOne({fullName:req.body.fullName}, function (err, data) {
            if (err) {
                throw err;
            }
            res.send({ success: "success" })
        })
        db.close()
    })
})

//add product to the cart
app.post('/addCart', function (req, res) {
    // console.log("request recieved...",req.body)
    client.connect(url, function (err, db) {
        if (err) {
            throw err;
        }
        console.log("connected to db")
        const collection = db.collection('cart');
        collection.insertOne(req.body, function (err, success) {
            if (err) {
                res.send("Something went wrong while inserting doc")
                throw err;
            }
            else {
                res.send({ success: "Appointment has been created successfully." })
            }

            db.close();
        })
    })
})

//remove appointments
app.delete('/removeCart', function (req, res) {
    console.log("request recieved...",req.body)
    client.connect(url, function (err, db) {
        if (err) {
            throw err;
        }
        const collection = db.collection('cart');
        collection.deleteOne({image:req.body.image,email:req.body.email}, function (err, data) {
            if (err) {
                throw err;
            }
            res.send({ success: "success" })
        })
        db.close()
    })
})

//fetching cart details
app.get('/cart', function (req, res) {
    console.log("request recieved...")
    client.connect(url, function (err, db) {
        if (err) {
            throw err;
        }
        const collection = db.collection('cart');
        collection.find({}).toArray(function (err, result) {
            //console.log("results found...",result)
            res.send(result)
        })
        db.close()
    })
})

app.listen(port, () => { console.log("Server started running successfully on port", port) })