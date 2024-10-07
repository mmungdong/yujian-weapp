import baseRequest from "./base_api"

export function getCourses(offest, limit=10) {
  baseRequest.get("/course", {
    offest,
    limit
  })
}