import http from "./httpService";

const apiEndpoint = "http://localhost:3003/api/users";

export function register(user) {
    
   return http.post(apiEndpoint, {
        name: user.name,
        email: user.email,
        password: user.password})
}

