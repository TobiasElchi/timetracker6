import React from "react";
import {GET_ALL_TRACKINGS} from "../Graphql/Queries";
import {
    DELETE_TRACKING,
    UPDATE_TRACKING_STARTTIME,
    UPDATE_TRACKING_ENDTIME,
    UPDATE_TRACKING_TIMESPENT
} from "../Graphql/MutationsTracking";
import {useQuery, useMutation} from "@apollo/client";
import {calculateTimeDifference} from "./calculateTimeDifference";
import {waitFor} from "@testing-library/react";
import {msToTime} from "./msToTime";

function ListOfTrackings() {
    const {data, refetch} = useQuery(GET_ALL_TRACKINGS, {
        pollInterval:500
    });
    const [deleteTracking, {}] = useMutation(DELETE_TRACKING);
    const [updateTrackingStarttime] = useMutation(UPDATE_TRACKING_STARTTIME);
    const [updateTrackingEndtime] = useMutation(UPDATE_TRACKING_ENDTIME);
    const [updateTrackingTimeSpent] = useMutation(UPDATE_TRACKING_TIMESPENT);

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
                                    refetch()
                                }}
                        > Delete Tracking
                        </button>
                        <button disabled={tracking.starttime != "not started"}
                            onClick={() => {
                                updateTrackingStarttime({variables: {id: tracking.id}})
                                refetch()
                            }}
                        > Start Tracking
                        </button>
                        <button disabled={tracking.starttime == "not started"||tracking.endtime != "not ended"}
                            onClick={() => {
                                updateTrackingEndtime({variables: {id: tracking.id}})                                ;
                                var timeSpent = calculateTimeDifference(tracking.starttime);
                                updateTrackingTimeSpent({variables: {id: tracking.id, timeSpent: timeSpent}})
                            }}
                        > Stop Tracking
                        </button>
                        <li>Created: {tracking.timestampCreated}</li>
                        <li>Updated: {tracking.timestampUpdated}</li>
                        <li>Started: {tracking.starttime}</li>
                        <li>Ended: {tracking.endtime}</li>
                        <li>Total time spent: {msToTime(tracking.timeSpent)}</li>
                        <li>ID of corresponding Task: {tracking.taskid}</li>
                    </div>
                );
            })}
        </div>
    );
}

export default ListOfTrackings;