import React, { useState, useEffect } from "react"

import ResourceTile from "./ResourceTile.js"

const ResourceList = (props) => {
  const [resources, setResources] = useState([])

  const getResources = async () => {
    try {
      const response = await fetch("/api/v1/resources")
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`
        const error = new Error(errorMessage)
        throw error
      }
      const parsedResponse = await response.json()
      const responseBody = parsedResponse.resources
      setResources(responseBody)

    } catch(err) {
      console.error("Error in Fetch!!")
      console.error(err)
    }
  }
  
  useEffect(() => {
    getResources()
  }, [])

  const resourceTiles = resources.map(resource => {
    return(
      <ResourceTile 
        key={resource.id}
        id={resource.id}
        title={resource.title}
      />
    )
  })

  return(
    <div> 
      <header>
        <h1>Check Out the Latest Coding Resources</h1>
      </header>

      <main>
        <ul>
          {resourceTiles}
        </ul>
      </main>
    </div>
  )
};

export default ResourceList;
