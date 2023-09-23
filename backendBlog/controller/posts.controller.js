const Post = require('../model/postSchema')

const getPosts = async(req, res) => {
    try {
        const post = await Post.find();
        if(!post.length) return res.status(404).json({ message: 'No Post Found' })
        res.status(200).json({ status: 'success', posts: post.reverse() })
    } catch (error) {
        return res.status(404).json({ error: error.message });
    }
}

const addPost = async(req, res) => {
    try {
        const { title, content } = req.body;
        const newPost = new Post({
            title,
            content,
            image:  `http://localhost:3000/image/${req.fileUniqueName}` ,
        });
        console.log(req.file , title , content)
        await newPost.save();
        if(newPost.content.length > 321 && newPost.content.length < 10) return
        res.status(201).json({ status: 'success', data: newPost});
    }catch (error) {
        return res.status(404).json({ status: 'fail', error: error.message });
    }
}

module.exports = {
    getPosts,
    addPost,
}