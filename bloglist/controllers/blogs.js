const blogsRouter = require('express').Router()
const Blog = require('../models/blog')

// get all blogs
blogsRouter.get('/', (req, res) => {
    Blog
      .find({})
      .then(blogs => {
        res.json(blogs)
    })
})
  
// create a blog
blogsRouter.post('/', (req, res) => {
    const blog = new Blog(res.body)
  
    blog
      .save()
      .then(result => {
        res.status(201).json(result)
    })
})

module.exports = blogsRouter