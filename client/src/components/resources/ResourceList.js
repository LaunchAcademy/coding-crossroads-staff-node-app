import React, { useState, useEffect } from "react";

import ResourceTile from "./ResourceTile.js"
import getResources from "../../apiRequests/getResources.js"

const ResourceList = props => {
  const [resources, setResources] = useState([])

  useEffect(() => {
    getResources().then((data) => {
      setResources(data)
    })
  }, [])

  const resourceTiles = resources.map(resource => {
    return(
      <ResourceTile 
        key={resource.id}
        {...resource}
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
