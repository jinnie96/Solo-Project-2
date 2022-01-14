const express = require('express');
const asyncHandler = require('express-async-handler');

const { Image } = require('../../db/models');
const router = express.Router();

router.get('/', asyncHandler(async (req, res) => {
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
    const { id, imageUrl, description } = req.body
    const prevImg = await Image.findByPk(id.id)
    const newImg = await prevImg.update({id, imageUrl, description})
    return res.json(newImg)
}))

router.delete('/:id(\\d+)', asyncHandler(async(req, res) => {
    const imageId = req.params.id
    const image = await Image.findByPk(parseInt(imageId));
    await image.destroy();
    return res.json(image)
}))

module.exports = router
