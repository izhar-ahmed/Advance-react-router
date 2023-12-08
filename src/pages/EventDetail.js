import React from 'react'
import { json, redirect, useRouteLoaderData } from 'react-router-dom';
import EventItem from '../components/EventItem';

function EventDetailPage() {
    const data = useRouteLoaderData('event-detail')
    return <EventItem event={data.event} />
}

export default EventDetailPage;

export async function loader({request, params}) {
    const id = params.eventId;
    console.log(id)
    const response = await fetch("http://localhost:8080/events/" + id);
    if(!response.ok){
        console.log("error error")
        throw json({Message: "Could not fetch Detail for this event."}, {
            status: 500
        })
    } else {
        return response;
    }
    
}

export async function action({params, request}) {
    console.log("delete action.");
    const eventId = params.eventId;
    const response = await fetch('http://localhost:8080/events/' + eventId, {
        method: request.method
    });
    if(!response.ok){
        console.log("error error")
        throw json({Message: "Could not delete event."}, {
            status: 500
        })
    }
    return redirect("/events");
}