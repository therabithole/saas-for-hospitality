import http from "./httpService";

const apiEndpoint = "http://localhost:3003/api/amenities";

export function getAmenities() {
    return http.get(apiEndpoint)
}