const express = require('express');
const asyncHandler = require('express-async-handler');

const { Image } = require('../../db/models');
const router = express.Router();

router.get('/', asyncHandler(async (req, res) => {
    console.log("FETCH IMAGES")
    const images = await Image.findAll({
        order: [
            ['createdAt', 'ASC']
        ]
    })
    return res.json(images)
}))

router.get('/:id(\\d+)', asyncHandler(async(req, res) => {
    const id = req.params.id;
    const image = await Image.findByPk(id)
    return res.json(image)
}))

router.post('/', asyncHandler(async(req, res) => {
    const { userId, albumId, imageUrl, description} = req.body
    const image = await Image.create({ userId, albumId, imageUrl, description })
    return res.json({image})
}))

router.put('/', asyncHandler(async (req, res) => {
    console.log("CHECKPOINT 2!@@")
    console.log("REQ BODY", req.body)
    const { id, imageUrl, description } = req.body
    console.log("PUT ID", id.id)
    const prevImg = await Image.findByPk(id.id)
    const newImg = await prevImg.update({id, imageUrl, description})
    return res.json(newImg)
}))

router.delete('/:id(\\d+)', asyncHandler(async(req, res) => {
    // console.log(req.params.id)
    const imageId = req.params.id
    console.log("IDDDD", imageId)
    const image = await Image.findByPk(parseInt(imageId));
    console.log("IMAGE PK", image)
    await image.destroy();
    return res.json(image)
}))

module.exports = router
