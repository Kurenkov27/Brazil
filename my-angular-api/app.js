const express = require('express');
// const bodyParser = require('body-parser')
const Post = require('./models/post');
const mongoose = require('mongoose');
require('dotenv').config()


const app = express();

mongoose.connect(process.env.MONGOOSE_PATH)
    .then(() => {
        console.log('Connected to DB')
    })
    .catch(e => {
        console.log('Connection error', e)
    })

app.use(express.json())

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", '*');
    res.setHeader("Access-Control-Allow-Headers", 'Origin, X-Requested-With, Content-Type, Accept');
    res.setHeader("Access-Control-Allow-Methods", 'GET, POST, PATCH, DELETE, OPTIONS, PUT');
    next()
})

app.post("/api/posts", (req, res, next) => {
    const post = new Post({
        title: req.body.title,
        content: req.body.content
    });
    post.save().then(createdPost => {
        res.status(201).json({
            message: 'Post was added',
            postId: createdPost._id
        })
    })
})

app.get('/api/posts', (req, res, next) => {
    Post.find()
        .then(data => {
            res.status(200).json({
                message: "Data passed successfully",
                posts: data
            });
        })
});

app.delete('/api/posts/:id', (req, res, next) => {
    Post.deleteOne({ _id: req.params.id }).then(result => {
        res.status(200).json({ message: "Post deleted!" })
    })
})

module.exports = app;