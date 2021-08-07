import React from "react";
import {useQuery} from "@apollo/client";
import {GET_ALL_TRACKINGS_BY_TASKID} from "../Graphql/Queries";
import {GraphQLObjectType} from "graphql";
import {TaskEntity} from "../../../backend/src/Entities/TaskEntity";

function ListOfTrackingsByTask(task: TaskEntity) {
    //taskid is not properly passed to this function. Using taskid:"3" works
    const {data} = useQuery(GET_ALL_TRACKINGS_BY_TASKID, {
        variables: {
            taskid:task.id
        },
    });
    return(
        <div>
            {data &&
            data.getAllTrackingsByTaskID.map((tracking: any) => {
                return (
                    <div>
                        <div className="Separator"/>
                        <div className="TrackingListBox">{tracking.description}</div>
                        <li>{tracking.starttime}</li>
                        <li>{tracking.endtime}</li>
                        <li>{tracking.timestampCreated}</li>
                        <li>{tracking.timestampUpdated}</li>
                    </div>
                );
            })}
        </div>
    );
}

export default ListOfTrackingsByTask;
