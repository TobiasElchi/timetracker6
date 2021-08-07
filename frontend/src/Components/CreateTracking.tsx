import React, {useState} from "react";
import {useMutation} from "@apollo/client";
import {CREATE_TRACKING} from "../Graphql/MutationsTracking";

function CreateTracking() {
    const [description, setdescription] = useState("");
    const [taskid, settaskid] = useState("");
    const [createTracking, {error}] = useMutation(CREATE_TRACKING);

    return (
        <div className="createTracking">
            <input
                type="text"
                placeholder="description"
                onChange={(event) => {
                    setdescription(event.target.value);
                }}
            />
            <input
                type="text"
                placeholder="Task-ID"
                onChange={(event) => {
                    settaskid(event.target.value);
                }}
            />
            <button
                onClick={() => {
                    createTracking({
                        variables: {
                            description: description,
                            taskid: taskid
                        },
                    });
                }}
            >
                Create Tracking
            </button>
        </div>
    );
}

export default CreateTracking;
