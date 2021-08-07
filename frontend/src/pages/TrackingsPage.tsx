import * as React from "react";
import CreateTracking from "../Components/CreateTracking";
import ListOfTrackings from "../Components/ListOfTrackings";
import ListOfTrackingsByTask from "../Components/ListOfTrackingsByTask";
import SearchTrackingsByTask from "../Components/SearchTrackingsByTask";

export const TrackingsPage = () => {
    return (
        <div style={{ display: "flex" }}>
            <div style={{ flex: "2" }}>
                <h1>Trackings</h1>
                <CreateTracking />
                <SearchTrackingsByTask/>
                <ListOfTrackings />
            </div>
        </div>
    );
};