import React from "react";
import {useQuery} from "@apollo/client";
import {GET_ALL_TRACKINGS_BY_ID} from "../Graphql/Queries";
import {TaskEntity} from "../../../backend/src/Entities/TaskEntity";

function ListOfTrackingsByTask(taskid: string) {
    const {data} = useQuery(GET_ALL_TRACKINGS_BY_ID, {
        variables: {
            taskid:taskid
        },
    });
    return(
        <div>
            {data &&
            data.getAllTrackingsByTaskID.map((tracking: any) => {
                return (
                    <div>
                        <h4>{taskid}</h4>
                        <div className="Separator"/>
                        <div className="TrackingListBox">{tracking.description}</div>
                    </div>
                );
            })}
        </div>
    );
}

export default ListOfTrackingsByTask;
