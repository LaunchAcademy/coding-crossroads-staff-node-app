import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"

const ResourceDetails = (props) => {
  const [resource, setResource] = useState({})
  
  const fetchResource = async () => {
    const id = props.match.params.id
    try {
      const response = await fetch(`/api/v1/resources/${id}`)
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`
        const error = new Error(errorMessage)
        throw error
      }
      const parsedResponse = await response.json()
      setResource(parsedResponse.resource)
    } catch(err) {
      console.error("Error in Fetch!!")
      console.error(err)
    }
  }
  
  useEffect(() => {
    fetchResource()
  }, [])
  
  return(
    <section>
      <Link to="/resources">
        <h3>Back to All Resources</h3>
      </Link>

      <h4>{resource.title}</h4>
      <p>{resource.description}</p>
      <a target="_blank" href={`${resource.url}`}>{`Resource URL: ${resource.title}`}</a>
      <p>{resource.resourceType}</p>
    </section>
  )
}

export default ResourceDetails