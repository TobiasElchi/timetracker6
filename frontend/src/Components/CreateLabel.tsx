import React, {useState} from "react";
import {useMutation} from "@apollo/client";
import {CREATE_LABEL} from "../Graphql/MutationsLabel";
import {showSnackbar} from "./ShowSnackbar";

function CreateLabel() {
    const [name, setName] = useState("");
    const [taskid, setTaskid] = useState("");
    const [createLabel, {error}] = useMutation(CREATE_LABEL);
    return (
        <div className="createLabel">
            <input
                id={"InputfieldCreateLabelName"}
                type="text"
                placeholder="name"
                onChange={(event) => {
                    setName(event.target.value);
                }}
            />
            <input
                id={"InputfieldCreateLabelTaskID"}
                type="number"
                placeholder="Task-ID"
                onChange={(event) => {
                    setTaskid(event.target.value);
                }}
            />
            <button
                onClick={() => {
                    if (name.length > 0) {
                        if (taskid.length > 0 && taskid.length < 3 && !isNaN(parseInt(taskid))){
                            createLabel({
                                variables: {
                                    name: name,
                                    taskid: taskid
                                },
                            });
                        } else {
                            // @ts-ignore
                            document.getElementById("InputfieldCreateLabelTaskID").focus()
                            showSnackbar(document.getElementById("snackbar2"))
                        }
                    } else {
                        // @ts-ignore
                        document.getElementById("InputfieldCreateLabelName").focus()
                        showSnackbar(document.getElementById("snackbar"))
                    }
                }}
            >Create Label
            </button>
            <div id="snackbar">{"Please fill out all Information"}</div>
            <div id="snackbar2">Please enter 2-digit number</div>
        </div>
    );
}

export default CreateLabel;