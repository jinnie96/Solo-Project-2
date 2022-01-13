import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import * as imageActions from "../../store/images";
import {useParams} from "react-router-dom"
import './UpdateImageForm.css'
import { useHistory } from 'react-router-dom'

function UpdateImageForm () {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(imageActions.getAllImages())
    }, [dispatch])

    const id = useParams()
    const history = useHistory()
    const sessionUser = useSelector(state => state.session.user)
    const images = useSelector(state => state.images)
    const imagesVal = Object.values(images)
    const filteredImg = imagesVal.filter(image => image !== null)
    const image = filteredImg.filter(image => image.id == id.id)
    console.log("IMAGES SESSION", image)
    const userId = sessionUser.id
    console.log("IMAGEID!@@@@@@@@", id)
    const [description, setDescription] = useState(image[0].description)
    const [imageUrl, setImageUrl] = useState(image[0].imageUrl)
    const handleSubmit = async(e) => {
        e.preventDefault()
        if (!description) setDescription("No Description Provided")
        const imageObj = await dispatch(imageActions.putImg({ id, imageUrl, description }))
        console.log(imageObj)
        if (imageObj) history.push('/')
    }

    return (
        <div>
        <h1>Update Image</h1>
        <form action="/action_page.php">
        <label>
        Image URL:
        <input
        type="text"
        value={imageUrl}
        onChange={(e) => setImageUrl(e.target.value)}
        required
        />
    </label>
    <label>
        Description (optional):
        <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        // required
        />
    </label>
        <button onClick={handleSubmit} type="submit">Update</button>
    </form>

        </div>
    )
}

export default UpdateImageForm
