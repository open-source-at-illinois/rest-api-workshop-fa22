import React, { useState } from 'react';
import { Col, Form, InputGroup, Row, Button } from "react-bootstrap";
import APIService from '../services/APIService';

const NewEventForm = ({ showMessage, events, setEvents }) => {
    const [name, setName] = useState("")
    const [location, setLocation] = useState("")
    const [date, setDate] = useState("")
    const [category, setCategory] = useState("")

    const onSaveClick = (event) => {
        event.preventDefault();
        if (name === '') {
            showMessage('Name cannot be empty', true);
            return;
        }
        if (location === '') {
            showMessage('Location cannot be empty', true);
            return;
        }

        const ids = Object.keys(events);
        const existingEventId = ids.find(id => events[id].name === name);
        const existingEvent = events[existingEventId];
        const newEvent = { name, location, date, category, id: existingEventId };
        if (existingEvent !== undefined) {
            if (window.confirm(`${name} already exists, update its info?`)) {
                APIService.updateEvent(newEvent)
                    .then(responseEvent => {
                        showMessage('Updated event!', false);
                    })
                    .catch(error => showMessage(error.response.data.error, true));
            }
            return;
        }

        APIService.createEvent(newEvent)
            .then(e => {
                showMessage('Added new event', false)
            })
            .catch(error => {
                showMessage(`${error.message}`, true)
            });
        setName('');
        setLocation('');
        setDate('');
        setCategory('');
    }

    // TODO: Make API POST call
    // TODO: Make Category a dropdown
    return (
        <>
            <h1 style={{ color: "white", fontFamily: "arial" }}>
                Add a new Event
            </h1>
            <Form onSubmit={onSaveClick} style={{ marginBottom: '30px' }}>
                <Row>
                    <InputGroup as={Col}>
                        <InputGroup.Prepend>
                            <InputGroup.Text id="Name">Name</InputGroup.Text>
                        </InputGroup.Prepend>
                        <Form.Control name="Name" value={name} onChange={e => {
                            e.preventDefault();
                            setName(e.target.value);
                        }} />
                    </InputGroup>
                    <InputGroup as={Col}>
                        <InputGroup.Prepend>
                            <InputGroup.Text id="Location">Location</InputGroup.Text>
                        </InputGroup.Prepend>
                        <Form.Control name="location" value={location} onChange={e => {
                            e.preventDefault();
                            setLocation(e.target.value);
                        }} />
                    </InputGroup>
                    <InputGroup as={Col}>
                        <InputGroup.Prepend>
                            <InputGroup.Text id="Date">Time</InputGroup.Text>
                        </InputGroup.Prepend>
                        <Form.Control name="Date" value={date} onChange={e => {
                            e.preventDefault();
                            setDate(e.target.value);
                        }} />
                    </InputGroup>
                    <InputGroup as={Col}>
                        <InputGroup.Prepend>
                            <InputGroup.Text id="Category">Category</InputGroup.Text>
                        </InputGroup.Prepend>
                        <Form.Control name="Category" value={category} onChange={e => {
                            e.preventDefault();
                            setCategory(e.target.value);
                        }} />
                    </InputGroup>
                    {/* <button type="submit" class="btn btn-primary" onClick={setName(name), setLocation(location), setDate(date), setTime(time), setCategory(category)}>Save</button> */}
                    <Button type="submit">Save</Button>
                </Row>
            </Form>
        </>
    )
}

export default NewEventForm;