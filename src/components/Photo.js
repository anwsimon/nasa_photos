import React from "react"
import { gql, useQuery } from '@apollo/client';

const NEW_QUERY = gql`
 query photoQuery {
  get5Photos {
    title,
    url,
    explanation,
    date
  }
}`


function Photo() {
  const { loading, error, data } = useQuery(NEW_QUERY);
  console.log("THIS IS DATA", data)
  if (loading) return (<p>Thank you for waiting while the photos load ...</p>);

  if (error) {
    // console.log("THIS IS THE ERROR", error)
    return <p>Error: {error.message}</p>;
  }

  return (
    <div>

          {data.get5Photos.map((photo) => {
            return (
              <div>
                <h2>{photo.title}</h2>
                <img src={photo.url} alt=''></img>
                <p>{photo.explanation}</p>
              </div>
            )
          })}
    </div>
  );
}

export default Photo;
