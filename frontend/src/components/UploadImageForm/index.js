import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";
import * as imageActions from "../../store/images";
import './UploadImageForm.css'

function UploadImageForm () {
    const dispatch = useDispatch();
    const history = useHistory()
    const sessionUser = useSelector(state => state.session.user)
    const userId = sessionUser.id
    const [imageUrl, setImageUrl] = useState("");
    const [description, setDescription] = useState("")
    const [validationErrors, setValidationErrors] = useState([])
    // const userId = session
    const handleSubmit = async (e) => {
        e.preventDefault();
        const errors = []
        const isImageRegex = new RegExp("(http(s?):)|([/|.|\w|\s])*\.(?:jpg|gif|png)")
        if (!isImageRegex.test(imageUrl)) errors.push("Please enter a valid image format")
        setValidationErrors(errors)
        // if (!description) setDescription("No Description Provided")
        if (errors.length === 0) {
            const imageObj = await dispatch(imageActions.postImg({ userId, imageUrl, description }))
            if (imageObj) {
                history.push('/')
                alert("Your image has been uploaded!")
            }
        }
    }
        // if (imageObj) history.push(`/images/${imageObj.image.id}`)
        // if (password === confirmPassword) {
        //   setErrors([]);
        //   return dispatch(sessionActions.signup({ email, username, password }))
        //     .catch(async (res) => {
        //       const data = await res.json();
        //       if (data && data.errors) setErrors(data.errors);
        //     });
        // }
        // return setErrors(['Confirm Password field must be the same as the Password field']);
      return (
          <div className="uploadForm">
          <h1 id="uploadText">Upload New Image</h1>
          <form action="/action_page.php">
              <div className="errors">
                    {validationErrors.length === 1 &&
                        <p id="error">Please enter a valid image format</p>
                    }
              </div>
              {/* <div class="imageUrl"> */}

            <label>
            Image URL (.jpg, .png files accepted) :
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
            <button id="uploadImgBtn" onClick={handleSubmit} type="submit">Upload</button>
              {/* </div> */}
        </form>
            <img id="image2" src="https://wallpaperboat.com/wp-content/uploads/2020/04/green-aesthetic-wallpaper-for-pc.jpg"></img>
          </div>
      );

}

export default UploadImageForm
