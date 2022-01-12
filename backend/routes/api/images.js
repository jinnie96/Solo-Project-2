const express = require('express');
const asyncHandler = require('express-async-handler');

const { Image } = require('../../db/models');
const router = express.Router();

router.get('/', asyncHandler(async (req, res) => {
    const images = await Image.findAll({})
    return res.json(images)
}))

router.get('/:id(\\d+)', asyncHandler(async(req, res) => {
    const id = req.params.id;
    const image = await Image.findByPk(id)
    return res.json(image)
}))

router.post('/new-image', asyncHandler(async(req, res) => {
    const { userId, albumId, imageUrl, description} = req.body
    const image = await Image.create({ userId, albumId, imageUrl, description })
    return res.json({image})
}))

router.delete('/:id(\\d+)', asyncHandler(async(req, res) => {
    const imageId = parseInt(req.params.id, 10);
    const image = await Image.findByPk(imageId);
    // checkPermissions(story, res.locals.user);
    // const userId = res.locals.user.id;
    // const comments = await Comment.findAll({
    //     where: { storyId },
    //     include: [User, Like],
    // })
    // for (let comment of comments) {
    //     // console.log("*******************")
    //     // console.log(comment)
    //     const commentId = comment.id
    //     // console.log("hihihi", commentId)
    //     const likes = await Like.findAll({
    //         where: { commentId} ,
    //     })
    //     for (let like of likes) {
    //         await like.destroy()
    //     }
    //     await comment.destroy();
    // }
    // const likes = await Like.findAll({
    //     where: { storyId },
    // })
    // for (let like of likes) {
    //     await like.destroy();
    // }
    await image.destroy();
    res.redirect(`/users/${userId}`);
}))

module.exports = router
