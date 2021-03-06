import React from "react"
import { useState } from "react"
import LikeButton from "./LikeButton"
import LookCloser from "./LookCloser"

function Photo(props) {
  const photo = props.photo
  const [isLiked, setIsLiked] = useState(false)

  return (
          <div className = "card" >
            <img src={photo.url} alt=''/>
            <div className="card-body">
              <h3 className="card-title">
                {photo.title}
              </h3>
              <h4>
                {photo.date}
              </h4>
              <p className="card-description">
                {photo.explanation}
              </p>
              <p>

              </p>
              <LikeButton
                onClick={() => {setIsLiked(!isLiked)}}
                isLiked={isLiked}
                title={isLiked ? "Unlike" : "Like"}
                className={isLiked ? "is-active" : "heart"}
              />
              <LookCloser
                url = {photo.url}
              />
            </div>
          </div>
      )
}


export default Photo;
