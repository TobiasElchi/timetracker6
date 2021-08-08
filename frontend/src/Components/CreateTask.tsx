import React, {useState} from "react";
import {useMutation} from "@apollo/client";
import {CREATE_TASK} from "../Graphql/MutationsTask";
import {showSnackbar} from "./ShowSnackbar";

function CreateTask() {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [createTask, {error}] = useMutation(CREATE_TASK);

    return (
        <div className="createTask">
            <input
                id={"InputfieldCreateTaskName"}
                type="text"
                placeholder="name"
                onChange={(event) => {
                    setName(event.target.value);
                }}
            />
            <input
                id={"InputfieldCreateTaskDescription"}
                type="text"
                placeholder="description"
                onChange={(event) => {
                    setDescription(event.target.value);
                }}
            />
            <button
                onClick={() => {
                    if (name.length > 0) {
                        if (description.length > 0) {
                            createTask({
                                variables: {
                                    name: name,
                                    description: description,
                                },
                            });
                        } else {
                            // @ts-ignore
                            document.getElementById("InputfieldCreateTaskDescription").focus()
                            showSnackbar(document.getElementById("snackbar"))
                        }
                    } else {
                        // @ts-ignore
                        document.getElementById("InputfieldCreateTaskName").focus()
                        showSnackbar(document.getElementById("snackbar"))
                    }
                }}
            >
                Create Task
            </button>
            <div id="snackbar">Please fill out all Information</div>
        </div>
    );
}

export default CreateTask;
