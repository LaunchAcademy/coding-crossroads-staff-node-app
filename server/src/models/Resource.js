const Model = require("./Model")

class Resource extends Model {
  static get tableName(){
    return "resources"
  }

  static get jsonSchema(){
    return {
      type: "object",
      required: ["title", "description", "resourceType"],
      properties: {
        description: { type: "string", minLength: 1, maxLength: 500 },
        resourceType: { type: "string", enum: Object.values(Resource.resourceTypes) }
      }
    }
  }

  static get resourceTypes() {
    return {
      blog: "blog",
      educationPlatform: "educationPlatform", 
      website: "website",
      book: "book",
      podcast: "podcast",
      video: "video"
    }
  }
}

module.exports = Resource