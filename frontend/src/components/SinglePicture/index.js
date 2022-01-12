import {useSelector} from "react-redux"
import {useParams} from "react-router-dom"
import * as imageActions from "../../store/images";
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'


function SinglePicture () {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(imageActions.getAllImages())
    }, [dispatch])

    const {id} = useParams()
    const image = useSelector((state) => state.images)
    // console.log("STATE!!!!!", image)
    const imagesVal = Object.values(image)
    // console.log("IMAGE VALUES!!!@@", imagesVal)
    const imagesValFilt = imagesVal.filter( image => image !== null)
    // console.log("FILTER", imagesValFilt)
    const imageFound = imagesValFilt.filter(image => image.id == id)
    // console.log("IMAGE!!!", imageFound)
    // console.log("IMAGE KEYS", imagesKey)
    // const image = imagesVal.find( image => image.id === imageId)

    // console.log("IMAGEID", id)

    // const image = useSelector(state => state.images.images[imageId])
    // const image = images.images[imageId]
    // console.log("IMAGE!!!!", image)
    return (
        <div>
            <img src={imageFound[0].imageUrl}></img>
            <figcaption>{imageFound[0].description}</figcaption>
        </div>
    )
}

export default SinglePicture
