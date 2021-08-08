import React, {useState} from "react";
import {useMutation} from "@apollo/client";
import {CREATE_TRACKING} from "../Graphql/MutationsTracking";
import {showSnackbar} from "./ShowSnackbar";

function CreateTracking() {
    const [description, setdescription] = useState("");
    const [taskid, settaskid] = useState("");
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
            <input
                id={"InputfieldCreateTrackingTaskID"}
                type={"number"}
                placeholder="Task-ID"
                onChange={(event) => {
                    settaskid(event.target.value);
                }}
            />
            <button
                onClick={() => {
                    if (description.length > 0) {
                        if (taskid.length > 0 && taskid.length < 3 && parseInt(taskid)!=NaN){
                            createTracking({
                                variables: {
                                    description: description,
                                    taskid: taskid
                                },
                            });
                        } else {
                            // @ts-ignore
                            document.getElementById("InputfieldCreateTrackingTaskID").focus()
                            showSnackbar(document.getElementById("snackbar2"))
                        }
                    } else {
                        // @ts-ignore
                        document.getElementById("InputfieldCreateTrackingDescription").focus()
                        showSnackbar(document.getElementById("snackbar"))
                    }
                }}
            >Create Tracking
            </button>
            <div id="snackbar">Please fill out all Information</div>
            <div id="snackbar2">Please enter 2-digit number</div>
        </div>
    );
}

export default CreateTracking;
