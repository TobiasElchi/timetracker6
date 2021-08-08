import React, {useState} from "react";
import {useMutation} from "@apollo/client";
import {CREATE_TRACKING} from "../Graphql/MutationsTracking";
import {showSnackbar} from "./ShowSnackbar";
import {TaskEntity} from "../../../backend/src/Entities/TaskEntity";

function AddTrackingToTask(task: TaskEntity) {
    const [description, setdescription] = useState("");
    const [createTracking, {error}] = useMutation(CREATE_TRACKING);


    return (
        <div className="createTracking">
            <input
                id={"InputfieldCreateTrackingDescription"}
                type="text"
                placeholder="description"
                onChange={(event) => {
                    setdescription(event.target.value);
                }}
            />
            <button
                onClick={() => {
                    if (description.length > 0) {
                            createTracking({
                                variables: {
                                    description: description,
                                    taskid: task.id
                                },
                            });
                    } else {
                        // @ts-ignore
                        document.getElementById("InputfieldCreateTrackingDescription").focus()
                        showSnackbar(document.getElementById("snackbar"))
                    }
                }}
            >Add Tracking
            </button>
            <div id="snackbar">Please fill out all Information</div>
        </div>
    );
}

export default AddTrackingToTask;
