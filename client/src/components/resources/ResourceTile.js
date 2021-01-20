import React, { useState, useEffect } from "react";

const ResourceTile = ({title, description, resourceType, url }) => {
  return(
    <section> 
      <h4>{title}</h4>
      <p>{description}</p>
      <a target="_blank" href={`${url}`}>{`Resource URL: ${title}`}</a>
      <p>{resourceType}</p>
    </section>
  )
};

export default ResourceTile;
