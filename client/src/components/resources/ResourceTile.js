import React from "react"
import { Link } from "react-router-dom"

const ResourceTile = ({ id, title }) => {
  return(
    <section> 
      <Link to={`/resources/${id}`}>
        <h4>{title}</h4>
      </Link>
    </section>
  )
};

export default ResourceTile;
