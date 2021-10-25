import http from "./httpService";

const apiEndpoint = "http://localhost:3003/api/hotels";

export function getHotels() {
    return http.get(apiEndpoint)
}

export function getHotel(hotelId){
    return http.get(apiEndpoint + "/" + hotelId);
       
}

export function saveHotel(hotel) {
    console.log(hotel, "save Hotel Func")
    // if existing movie- update
    if(hotel._id) {
       
        // RESTFUL API doesnt like _id in the body of request when putting (one in URL already)
       // http.put(apiEndpoint + "/" + hotel._id);
        const body = {...hotel};
        delete body._id;
        console.log("boddddy", body)
       return http.put(apiEndpoint + "/" + hotel._id, body)
    }
    return http.post(apiEndpoint , hotel )
// else new movie, post request    
    
}

export function deleteHotels(hotelId) {
    http.delete(apiEndpoint)
}