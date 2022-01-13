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
        console.log("ENDSWIHT", imageUrl.endsWith('.jpg'))
        const isImageRegex = new RegExp("(http(s?):)|([/|.|\w|\s])*\.(?:jpg|gif|png)")
        if (!isImageRegex.test(imageUrl)) errors.push("Please enter a valid image format")
        setValidationErrors(errors)
        console.log(errors)
        // if (!description) setDescription("No Description Provided")
        console.log(errors.length, "LENGTH")
        if (errors.length === 0) {
            const imageObj = await dispatch(imageActions.postImg({ userId, imageUrl, description }))
            console.log("AFTER SUBMISSION!!!!!", imageObj)
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
    console.log(validationErrors.length, "LENGTH2")
      return (
          <div>
          <h1>Upload New Image</h1>
          <form action="/action_page.php">
              <div className="errors">
                    {validationErrors.length === 1 &&
                        <p id="error">Please enter a valid image format</p>
                    }
              </div>
            <label>
            Image URL (jpg, .png files accepted) :
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
            <button onClick={handleSubmit} type="submit">Upload</button>
        </form>

          </div>
      );

}

export default UploadImageForm
