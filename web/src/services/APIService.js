import axios from 'axios';

const baseUrl = 'http://127.0.0.1:5000';

const getEvents = () => {
    const promise = axios.get(baseUrl + "/all");
    return promise.then(response => response.data)
};

const createEvent = (newPerson) => {
    const promise = axios.post(baseUrl + "/event", newPerson);
    return promise.then(response => response.data);
};

const deleteEvent = (id) => {
    const promise = axios.delete(`${baseUrl}/event/${id}`);
    return promise.then(response => response.status)
};

const updateEvent = (event) => {
    const promise = axios.patch(`${baseUrl}/event/${event.id}`, event);
    return promise.then(response => response.data)
};

const apiService = {getEvents, createEvent, deleteEvent, updateEvent}

export default apiService