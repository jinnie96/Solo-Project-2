import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, NavLink, Link } from "react-router-dom";
import * as imageActions from "../../store/images";
import './UserHomePage.css'


function UserHomePage () {
    const dispatch = useDispatch()
    useEffect(() => {
        console.log('DISPATCH')
        dispatch(imageActions.getAllImages())
    }, [dispatch])

    // console.log(state)
    // dispatch(imageActions.getAllImages())
    const images = useSelector((state) => state.images)
    const sessionUser = useSelector((state) => state.session.user.username)
    const imagesVal = Object.values(images)
    const imagesKey = Object.keys(images)
    // imagesVal.pop()
    // const imagesValFilt2 = imagesVal.map( image => console.log("IMAGESMAPPING", image))
    const imagesValFilt = imagesVal.filter( image => image !== "images")
    return (
        <div class="discover">
            <h3 id="userWelcome">Welcome {sessionUser}</h3>
        <h1 id="discover">Discover</h1><br></br>
                {imagesValFilt.map((image) => {
                    if (image) {
                            {console.log(image)}
                            if (image.id) {
                                return(
                                    <Link to={`images/${image.id}`}>
                                            {/* <figcaption id="caption">{image.description}</figcaption> */}
                                            <img id="image"key={image.id} src={image.imageUrl}></img>
                                    </Link>
                                )
                            }
                        }
                })}
        </div>
    )
}

export default UserHomePage
