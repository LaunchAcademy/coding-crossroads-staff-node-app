import React, { useState, useEffect } from "react";

import ResourceTile from "./ResourceTile.js"

const ResourceList = props => {
  const [resources, setResources] = useState([])

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
