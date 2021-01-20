const Model = require("./Model")

class Resource extends Model {
  static get tableName(){
    return "resources"
  }

  static get jsonSchema() {
    return {
      type: "object",
      required: ["title", "description", "resourceType"],
      properties: {
        title: { type: "string", minLength: 1 },
        description: { type: "string", minLength: 1, maxLength: 500 },
        url: { type: "string", format: "uri", pattern: "^https?://" },
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

  static get relationMappings() {
    const Review = require("./Review")

    return {
      reviews: {
        relation: Model.HasManyRelation,
        modelClass: Review,
        join: {
          from: "resources.id",
          to: "reviews.resourceId"
        }
      }
    }
  }
}

module.exports = Resource