import axios from 'axios';

const baseUrl = 'http://127.0.0.1:5000';

const getEvents = () => {
    const promise = axios.get(baseUrl + "/events");
    return promise.then(response => response.data)
};

const createEvent = (newPerson) => {
    const promise = axios.post(baseUrl + "/events", newPerson);
    return promise.then(response => response.data);
};

const deleteEvent = (id) => {
    const promise = axios.delete(`${baseUrl}/events/${id}`);
    return promise.then(response => response.status)
};

const updateEvent = (event) => {
    const promise = axios.patch(`${baseUrl}/events/${event.id}`, event);
    return promise.then(response => response.data)
};

const apiService = {getEvents, createEvent, deleteEvent, updateEvent}

export default apiService