import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import * as imageActions from "../../store/images";
import './UploadImageForm.css'

function UploadImageForm () {
    const dispatch = useDispatch();
    const [imageUrl, setImageUrl] = useState("");
    const [description, setDescription] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        return dispatch(imageActions.postImg({ imageUrl, description }))
            .catch(async (res) => {
                const data = await res.json();
            })
        // if (password === confirmPassword) {
        //   setErrors([]);
        //   return dispatch(sessionActions.signup({ email, username, password }))
        //     .catch(async (res) => {
        //       const data = await res.json();
        //       if (data && data.errors) setErrors(data.errors);
        //     });
        // }
        // return setErrors(['Confirm Password field must be the same as the Password field']);
      };

      return (
          <div>
          <h1>Upload New Image</h1>
          <form action="/action_page.php">
            <label>
            ImageURL:
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
            <button onClick={handleSubmit} type="submit">Submit</button>
        </form>

          </div>
      );

}

export default UploadImageForm