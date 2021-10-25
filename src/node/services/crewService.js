import http from "./httpService";

const apiEndpoint = "http://localhost:3003/api/crews";

export function getCrews() {
    return http.get(apiEndpoint)
}