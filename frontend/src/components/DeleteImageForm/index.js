import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import * as imageActions from "../../store/images";
import {useParams} from "react-router-dom"
import './DeleteImageForm.css'
import { useHistory } from 'react-router-dom'

function DeleteImageForm () {
    const id = useParams()
    console.log(id, "IDDDD")
    const history = useHistory()
    const dispatch = useDispatch()
    const handleDelete = async(e) => {
        e.preventDefault()
        const imageObj = await dispatch(imageActions.deleteImg(id))
        console.log(imageObj)
        if (imageObj) history.push('/')
    }

    const handleCancel = async(e) => {
        e.preventDefault()
        history.goBack()
        // history.push(`images/${id}`)
    }


    return (
        <div class="deleteForm">
          <p id="deleteStory">Are you sure you want to delete this story?</p>
          <div class="deleteBtns">
            <button id="delete"onClick={handleDelete}>Delete</button>
            <button id="cancel" onClick={handleCancel}>Cancel</button>
          </div>
        </div>
      );
}
export default DeleteImageForm
