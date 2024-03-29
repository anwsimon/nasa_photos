import React from "react"
import { gql, useQuery } from "@apollo/client"
import Photo from "./Photo"
import Header from "./Header"
//graphQL query for 5 photos
const PHOTO_QUERY = gql`
  query photoQuery {
    get5Photos {
      title
      url
      explanation
      date
    }
  }
`

function Home() {
  const { loading, error, data } = useQuery(PHOTO_QUERY)
  if (loading)
    return (
      <div>
        <p>Thank you for waiting while we load today's images.</p>
        <img
          src="https://64.media.tumblr.com/8e8caf6f584fd8d4e6dda24f98a8b572/tumblr_obupr9PSpm1rhj2m8o1_r2_1280.gifv"
          alt=""
        ></img>
      </div>
    )

  if (error) {
    console.error(error.message)
    return (
      <div>
        <p>
          Sorry, it appears we've experienced an error. We're hard at work
          trying to fix this.
        </p>
        <img
          src="http://boingboing.net/wp-content/uploads/2012/03/kittensinspace.jpg"
          alt=""
        ></img>
      </div>
    )
  }

  return (
    <div>
      <Header />
      <div className="grid-list">
        {data.get5Photos.map((photo, index) => {
          return (
            <div key={index}>
              <div className="grid-item">
                <Photo photo={photo} />
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Home
