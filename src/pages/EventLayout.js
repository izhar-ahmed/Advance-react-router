import React from "react";
import EventNavigation from "../components/EventsNavigation"
import { Outlet } from 'react-router-dom';

function EventLayout() {
    return <>
        <EventNavigation />
        <main>
        <Outlet />
        </main>
    </>
}

export default EventLayout;