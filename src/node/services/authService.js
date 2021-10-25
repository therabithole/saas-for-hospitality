import http from "./httpService";

// Hardcode -
const apiEndpoint = "http://localhost:3003/api/auth";



export function login(email, password) {
    
   return http.post(apiEndpoint, { email, password})
}

