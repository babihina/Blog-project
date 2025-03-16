const express=require("express");
const Blog=require("../models/Blog");

const router = express.Router();

router.get('/', async (req, res) => {
    try {
      const blogs = await Blog.find();
      res.status(200).json(blogs);
    } catch (error) {
      res.status(400).send('Error ', error);
    }
  });

  router.post('/', async (req, res) => {
    try {
        const blog = new Blog(req.body);
        const savedBlog = await blog.save();
        res.status(201).json(savedBlog);
    } catch (error) {
        res.status(400).send('Error', error);
    }
});

router.put('/:id', async (req, res) => {
    try {
        const updatedBlog = await Blog.findByIdAndUpdate(req.params.id, req.body);
        res.status(200).json(updatedBlog);
    } catch (error) {
        res.status(400).send('Error',error);
    }
});

router.delete('/:id', async (req, res) => {
    try {
        await Blog.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: 'Blog deleted' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

  module.exports = router;