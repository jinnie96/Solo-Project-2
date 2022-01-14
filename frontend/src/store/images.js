import { csrfFetch } from './csrf';

const GET_IMAGES = 'images/GET_IMAGES'
const POST_IMAGE = 'images/POST_IMAGE'
const PUT_IMAGE = 'images/PUT_IMAGE'
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

export const putImage = (image) => {
  return {
    type: PUT_IMAGE,
    image
  }
}

export const deleteImage = (image) => {
    return {
      type: DELETE_IMAGE,
      image
    };
};

export const getAllImages = () => async(dispatch) => {
    const response = await csrfFetch('/api/images')
    const data = await response.json()
    // console.log("DATAAAAA",data)
    dispatch(getImage(data))
    return response
}

export const postImg = (image) => async(dispatch) => {
  // console.log("CHECKPOINT")
    const response = await csrfFetch('/api/images', {
        method: 'POST',
        body: JSON.stringify(image)
    })

    const data = await response.json()
    // console.log("DATA", data)
    dispatch(postImage(data))
    return data
}

export const putImg = (updatedImg) => async(dispatch) => {
  const response = await csrfFetch(`/api/images`, {
    method: 'PUT',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(updatedImg)
  })
  const data = await response.json()
  dispatch(putImage(data))
  return data
}

export const deleteImg = (imageId) => async(dispatch) => {
    const response = await csrfFetch(`/api/images/${imageId.id}`, {
        method: 'DELETE',
    })
    const data = await response.json()
    dispatch(deleteImage(data.image))
    return data
}

const initialState = {};

const imagesReducer = (state = initialState, action) => {
    let newState = { ...state }
    switch (action.type) {
      case GET_IMAGES:
        action.images.map(image => { newState[image.id] = image})
        return newState;
      case POST_IMAGE:
        newState.images = {...state.images}
        newState.images[action.image.id] = action.image;
        return newState;
      case PUT_IMAGE:
        newState.images = {...state.images}
        newState.images[action.image.id] = action.image
      case DELETE_IMAGE:
        newState = {...state.images}
        delete newState[action.id]
        return newState;
      default:
        return state;
    }
  };

  export default imagesReducer;
