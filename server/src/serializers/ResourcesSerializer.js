import ReviewsSerializer from "./ReviewsSerializer.js"

class ResourcesSerializer {
  static getSummary(resource) {
    const allowedAttributes = ["id", "title"]
    let serializedResource = {}

    for (const attribute of allowedAttributes) {
      serializedResource[attribute] = resource[attribute]
    }
    return serializedResource
  }

  static async getDetails(resource) {
    const allowedAttributes = ["id", "title", "description", "url", "resourceType"]
    let serializedResource = {}

    for (const attribute of allowedAttributes) {
      serializedResource[attribute] = resource[attribute]
    }
    
    const reviews = await resource.$relatedQuery("reviews")
    serializedResource.reviews = reviews.map((review) => {
      return ReviewsSerializer.getSummary(review)
    })
    return serializedResource
  }
}

export default ResourcesSerializer