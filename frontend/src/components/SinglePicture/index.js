import {useSelector} from "react-redux"
import {useParams} from "react-router-dom"
import * as imageActions from "../../store/images";
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from "react-router-dom";
import './SinglePicture.css'


function SinglePicture () {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(imageActions.getAllImages())
    }, [dispatch])

    // const {id} = useParams()
    // const image = useSelector((state) => state.images)
    // // console.log("STATE!!!!!", image)
    // const imagesVal = Object.values(image)
    // // console.log("IMAGE VALUES!!!@@", imagesVal)
    // const imagesValFilt = imagesVal.filter( image => image !== null)
    // // console.log("FILTER", imagesValFilt)
    // const imageFound = imagesValFilt.filter(image => image.id == id)
    // dispatch(imageActions.getAllImages())

    const {id} = useParams()
    const image = useSelector((state) => state.images)
    const sessionUser = useSelector((state) => state.session.user)
    console.log("STATE!!!!!", image)
    const imagesVal = Object.values(image)
    console.log("IMAGE VALUES!!!@@", imagesVal)
    const imagesValFilt = imagesVal.filter( image => image !== null)
    console.log("FILTER", imagesValFilt)
    const imageFound = imagesValFilt.filter(image => image.id == id)
    console.log("IMAGE!!!", imageFound)
    // const image = imagesVal.find( image => image.id === imageId)

    const imageObj = useSelector(state => state.images[id])
    console.log("IMAGEOBJ", imageObj?.userId)

    console.log("IMAGEID", id)

    // const image = useSelector(state => state.images.images[imageId])
    // const image = images.images[imageId]
    console.log("IMAGE!!!!", image)
    console.log(sessionUser)
    // const imageId = imageFound[0].id
    if (sessionUser && sessionUser.id == imageObj?.userId) {
        return (
            <div className="photodetails">
                <img id="singlePicture" src={imageObj?.imageUrl}></img>
                <figcaption id="caption">{imageObj?.description}</figcaption>
                {/* {sessionUser && sessionUser.id === imageFound[0].userId} */}
                <div class="buttons">
                    <Link to={`${imageObj.id}/edit`}><button id="edit">Edit</button></Link>
                    <Link to={`${imageObj.id}/delete`}><button id="delete">Delete</button></Link>
                </div>
            </div>
        )
    } else {
        return (
            <div className="photodetails">
                <img id="singlePicture" src={imageObj?.imageUrl}></img>
                <figcaption id ="caption">{imageObj?.description}</figcaption>
                {/* {sessionUser && sessionUser.id === imageFound[0].userId} */}
            </div>
        )
    }
}

export default SinglePicture
