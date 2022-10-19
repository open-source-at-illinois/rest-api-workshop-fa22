import React, { useEffect, useState } from 'react';
import { Button, Table } from "react-bootstrap";
import '../App.css';
import APIService from '../services/APIService';

const EventList = ({ events, setEvents, showMessage }) => {

    const [apiErrored, setApiErrored] = useState(false);

    useEffect(() => {
        APIService.getEvents()
            .then(eventList => {
                // console.log(eventList)
                setApiErrored(false);
                setEvents(eventList);
            })
            .catch(err => setApiErrored(true));
    }, [setEvents]);

    if (!events) {
        return (
            <h4 style={{ color: apiErrored ? "red" : "white", fontFamily: "arial" }}>
                {apiErrored ? 'Could not reach the API' : 'No Events Found'}
            </h4>
        );
    }

    const deleteEvent = (id) => {
        return () => {
            APIService.deleteEvent(id)
                .then(e => showMessage('Event successfully deleted'))
                .catch(error => {
                    showMessage(error.message, true);
                });
        }
    };

    const ids = Object.keys(events);
    return (
        <div>
            <Table striped hover>
                <thead>
                    <tr>
                        <th> # </th>
                        <th>Name</th>
                        <th>Location</th>
                        <th>Date / Time</th>
                        <th>Category</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        ids.map(id => {
                            let eventWithId = events[id]
                            eventWithId["id"] = id
                            return eventWithId
                        })
                            .map(event =>
                                <tr key={event.id}>
                                    <td>{event.id}</td>
                                    <td>{event.name}</td>
                                    <td>{event.location}</td>
                                    <td>{event.date}</td>
                                    <td>{event.category}</td>
                                    <Button variant="danger" style={{
                                        alignSelf: "center"
                                    }} onClick={deleteEvent(event.id)}>Delete</Button>
                                </tr>
                            )
                    }

                </tbody>
            </Table>
        </div>
    )
}

export default EventList;