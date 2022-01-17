import React from "react"
import { useState } from "react"
import LikeButton from "./LikeButton"

function Photo(props) {
  const photo = props.photo
  const [isLiked, setIsLiked] = useState(false)

  console.log(isLiked)
  return (
        <div>
          <h2>{photo.title}</h2>
          <h3>Earth Date: {photo.date}</h3>
          <img src={photo.url} alt=''></img>

          <LikeButton
            onClick={() => {setIsLiked(!isLiked)}}
            isLiked={isLiked}
            title={isLiked ? "Unlike" : "Like"}
          />

          <p>{photo.explanation}</p>
        </div>
      )
}


export default Photo;
