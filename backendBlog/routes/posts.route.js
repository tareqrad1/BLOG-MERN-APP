const express = require('express');
const { getPosts, addPost } = require('../controller/posts.controller');
const multer  = require('multer');
const verifyToken = require('../middleware/verifyToken');
const cookieJWTAuth = require('../middleware/cookieJWTAuth');
const router = express.Router();
router.use(express.json());

const diskStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'image');
    },
    filename: (req, file, cb) => {
        const ext = file.mimetype.split('/')[1]
        const fileName = `image-${Date.now()}.${ext}`; // const fileName = `image-${Date.now()}.${ext}`
        console.log(fileName);
        req.fileUniqueName = fileName; // middleware
        cb(null, fileName);
    }
})

function fileFilter (req, file, cb) {
    const imageType = file.mimetype.split('/')[0];
    if(imageType === 'image') {
        return cb(null, true);
    }else {
        return cb('Thats not a photo sorry !', false); 
    }
}
const upload = multer({
    storage: diskStorage,
    fileFilter,
})

router.route('/')
                .get(getPosts);

router.route('/')
                .post(verifyToken, upload.single('image'), addPost)


module.exports = router;