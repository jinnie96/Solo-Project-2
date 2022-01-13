import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, NavLink, Link } from "react-router-dom";
import * as imageActions from "../../store/images";
import './UserHomePage.css'


function UserHomePage () {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(imageActions.getAllImages())
    }, [dispatch])

    // console.log(state)
    // dispatch(imageActions.getAllImages())
    const images = useSelector((state) => state.images)
    console.log("STATE!!!!!", images)
    const imagesVal = Object.values(images)
    const imagesKey = Object.keys(images)
    console.log("IMAGE VALUES", imagesKey)
    console.log("IMAGE KEYS", imagesKey)
    const imagesValFilt = imagesVal.filter( image => image !== null)

    return (
        <div class="discover">
        <h1 id="discover">Discover</h1>
                {imagesValFilt.map((image) => {
                        {console.log(image.imageUrl)}
                        return(
                            <Link to={`images/${image.id}`}>
                                    {/* <figcaption id="caption">{image.description}</figcaption> */}
                                    <img id="image"key={image.id} src={image.imageUrl}></img>
                            </Link>
                        )
                })}
        </div>
    )
}

export default UserHomePage
