import React from "react";
import {GET_ALL_TRACKINGS} from "../Graphql/Queries";
import {DELETE_TRACKING, UPDATE_TRACKING_STARTTIME, UPDATE_TRACKING_ENDTIME} from "../Graphql/MutationsTracking";
import {useQuery, useMutation} from "@apollo/client";

function ListOfTrackings() {
    const {data} = useQuery(GET_ALL_TRACKINGS, {
        //pollInterval: 500,
    });
    const [deleteTracking, {}] = useMutation(DELETE_TRACKING);
    const [updateTrackingStarttime] = useMutation(UPDATE_TRACKING_STARTTIME);
    const [updateTrackingEndtime] = useMutation(UPDATE_TRACKING_ENDTIME);

    return (
        <div>
            {data &&
            data.getAllTrackings.map((tracking: any) => {
                return (
                    
                    <div>
                        <div className="Separator"/>
                        <div className="TrackingBox">{tracking.description}</div>

                        <button id={tracking.id}
                            onClick={() => {
                                deleteTracking({variables: {id: tracking.id}});
                            }}
                        > Delete Tracking
                        </button>
                        <button
                            onClick={() => {
                                updateTrackingStarttime({variables: {id: tracking.id}});
                            }}
                        > Start Tracking
                        </button>
                        <button
                            onClick={() => {
                                updateTrackingEndtime({variables: {id: tracking.id}});
                            }}
                        > Stop Tracking
                        </button>
                        <li>Created: {tracking.timestampCreated}</li>
                        <li>Updated: {tracking.timestampUpdated}</li>
                        <li>Started: {tracking.starttime}</li>
                        <li>Ended: {tracking.endtime}</li>
                        <li>TaskID: {tracking.taskid}</li>
                    </div>
                );
            })}
        </div>
    );
}

export default ListOfTrackings;