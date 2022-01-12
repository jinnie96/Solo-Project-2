import { csrfFetch } from './csrf';

const GET_IMAGES = 'images/GET_IMAGES'
const POST_IMAGE = 'images/POST_IMAGE'
const DELETE_IMAGE = 'images/DELETE_IMAGE'

export const getImage = (images) => {
    return {
      type: GET_IMAGES,
      images
    };
};

export const postImage = (image) => {
    return {
      type: POST_IMAGE,
      image
    };
};

export const deleteImage = (image) => {
    return {
      type: DELETE_IMAGE,
      image
    };
};

export const getAllImages = () => async(dispatch) => {
    console.log('here')
    const response = await csrfFetch('/api/images')
    const data = await response.json()
    console.log("DATAAAAA", data)
    dispatch(getImage(data))
    return response
}

export const postImg = (image) => async(dispatch) => {
    const response = await csrfFetch('/api/images', {
        method: 'POST',
        body: JSON.stringify(image)
    })

    const data = response.json()
    dispatch(postImage(data.image))
    return response
}

export const deleteImg = (imageId) => async(dispatch) => {
    const response = await csrfFetch(`/api/images/${imageId}`, {
        method: 'DELETE',
        headers: { "Content-Type": "application/json" }
    })
    const data = response.json()
    dispatch(deleteImage(data.image))
}

const initialState = { images: null };

const imagesReducer = (state = initialState, action) => {
    let newState = { ...state }
    switch (action.type) {
      case GET_IMAGES:
        action.images.forEach(image => { newState[image.id] = image})
        return newState;
      case POST_IMAGE:
        newState = {...state}
        newState[action.image.id] = action.image;
        return newState;
      case DELETE_IMAGE:
        newState = {...state}
        delete newState[action.image.id]
        return newState;
      default:
        return state;
    }
  };

  export default imagesReducer;
