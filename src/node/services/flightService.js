import http from "./httpService";

const apiEndpoint = "http://localhost:3003/api/flights";

export function getFlights() {
    return http.get(apiEndpoint)
}

export function getFlight(flightId){
    return http.get(apiEndpoint + "/" + flightId);
       
}

export function saveFlight(flight) {
    console.log(flight, "save Hotel Func")
    // if existing movie- update
    if(flight._id) {
       
        // RESTFUL API doesnt like _id in the body of request when putting (one in URL already)
       // http.put(apiEndpoint + "/" + flight._id);
        const body = {...flight};
        delete body._id;
        console.log("boddddy", body)
       return http.put(apiEndpoint + "/" + flight._id, body)
    }
    return http.post(apiEndpoint , flight )
// else new movie, post request    
    
}

export function deleteFlights(flightId) {
    http.delete(apiEndpoint)
}