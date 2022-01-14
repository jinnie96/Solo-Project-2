import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import * as imageActions from "../../store/images";
import {useParams} from "react-router-dom"
import './DeleteImageForm.css'
import { useHistory } from 'react-router-dom'

function DeleteImageForm () {
    const id = useParams()
    const history = useHistory()
    const dispatch = useDispatch()
    const handleDelete = async(e) => {
        e.preventDefault()
        const imageObj = await dispatch(imageActions.deleteImg(id))
        if (imageObj) history.push('/')
    }

    const handleCancel = async(e) => {
        e.preventDefault()
        history.goBack()
        // history.push(`images/${id}`)
    }


    return (
        <div class="deleteForm">
          <p id="deleteStory">Are you sure you want to delete this image?</p>
          <div class="deleteBtns">
            <button id="delete"onClick={handleDelete}>Delete</button>
            <button id="cancel" onClick={handleCancel}>Cancel</button>
          </div>
          <img id="image2" src="https://wallpaperscute.com/wp-content/uploads/2021/01/Desktop-Wallpaper-Green-Aesthetic.jpg"></img>
        </div>
      );
}
export default DeleteImageForm
