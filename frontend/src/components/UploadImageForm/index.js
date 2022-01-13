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
    const [errors, setErrors] = useState([])
    // const userId = session
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!imageUrl.endswith(",jpg")) // TO DO!@@@@@@@@@@@@@@@
        if (!description) setDescription("No Description Provided")
        const imageObj = await dispatch(imageActions.postImg({ userId, imageUrl, description }))
        console.log("AFTER SUBMISSION!!!!!", imageObj)
        if (imageObj) {
            history.push('/')
            alert("Your image has been uploaded!")
        }
        // if (imageObj) history.push(`/images/${imageObj.image.id}`)
    }
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
          <div>
          <h1>Upload New Image</h1>
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
            <button onClick={handleSubmit} type="submit">Upload</button>
        </form>

          </div>
      );

}

export default UploadImageForm
