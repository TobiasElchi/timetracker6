import React, {useState} from "react";
import {useQuery} from "@apollo/client";
import {GET_ALL_TRACKINGS_BY_TASKID} from "../Graphql/Queries";

function SearchTrackingsByTask() {
    const [taskid, settaskid] = useState("");
    const {data} = useQuery(GET_ALL_TRACKINGS_BY_TASKID, {variables: {taskid: taskid}});
    return (
        <div>
            <input
                type="text"
                placeholder="TaskID"
                onChange={(event) => {
                    settaskid(event.target.value);
                }}
            />
            <div>
                {data &&
                data.getAllTrackingsByTaskID.map((tracking: any) => {
                    return (
                        <h1>{tracking.description}</h1>
                    );
                })}
            </div>
        </div>)
}

export default SearchTrackingsByTask;
