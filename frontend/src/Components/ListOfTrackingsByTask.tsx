import React from "react";
import {useQuery, useMutation} from "@apollo/client";
import {GET_ALL_TRACKINGS_BY_TASKID} from "../Graphql/Queries";
import {TaskEntity} from "../../../backend/src/Entities/TaskEntity";
import {DELETE_TRACKING, UPDATE_TRACKING_STARTTIME, UPDATE_TRACKING_ENDTIME} from "../Graphql/MutationsTracking";

function ListOfTrackingsByTask(task: TaskEntity) {
    const {data, refetch} = useQuery(GET_ALL_TRACKINGS_BY_TASKID, {
        variables: {
            taskid: task.id,
        },
    });
    const [deleteTracking, {}] = useMutation(DELETE_TRACKING);
    const [updateTrackingStarttime] = useMutation(UPDATE_TRACKING_STARTTIME);
    const [updateTrackingEndtime] = useMutation(UPDATE_TRACKING_ENDTIME);
    return (
        <div>
            {data &&
            data.getAllTrackingsByTaskID.map((tracking: any) => {
                return (
                    <div className="TrackingAsPartOfTask">
                        <div className="Separator"/>
                        <div className="TrackingBox">{tracking.description}</div>

                        <button id={tracking.id}
                                onClick={() => {
                                    deleteTracking({variables: {id: tracking.id}});
                                    refetch()
                                }}
                        > Delete Tracking
                        </button>
                        <button
                            onClick={() => {
                                updateTrackingStarttime({variables: {id: tracking.id}});
                                refetch()
                            }}
                        > Start Tracking
                        </button>
                        <button
                            onClick={() => {
                                updateTrackingEndtime({variables: {id: tracking.id}});
                                refetch()
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

export default ListOfTrackingsByTask;
