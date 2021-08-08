import React, {useState} from "react";
import {useMutation} from "@apollo/client";
import {CREATE_LABEL} from "../Graphql/MutationsLabel";
import {showSnackbar} from "./ShowSnackbar";
import {TaskEntity} from "../../../backend/src/Entities/TaskEntity";

function AddLabelToTask(task: TaskEntity) {
    const [name, setname] = useState("");
    const [createLabel, {error}] = useMutation(CREATE_LABEL);


    return (
        <div className="createLabel">
            <input
                id={"InputfieldCreateLabelName"}
                type="text"
                placeholder="Labelname"
                onChange={(event) => {
                    setname(event.target.value);
                }}
            />
            <button
                onClick={() => {
                    if (name.length > 0) {
                            createLabel({
                                variables: {
                                    name: name,
                                    taskid: task.id
                                },
                            });
                    } else {
                        // @ts-ignore
                        document.getElementById("InputfieldCreateLabelName").focus()
                        showSnackbar(document.getElementById("snackbar"))
                    }
                }}
            >Add Label
            </button>
            <div id="snackbar">Please fill out all Information</div>
        </div>
    );
}

export default AddLabelToTask;
