import React, {useState} from "react";
import {useMutation} from "@apollo/client";
import {CREATE_TASK} from "../Graphql/MutationsTask";

function CreateTask() {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [createTask, {error}] = useMutation(CREATE_TASK);

    return (
        <div className="createTask">
            <input
                type="text"
                placeholder="name"
                onChange={(event) => {
                    setName(event.target.value);
                }}
            />
            <input
                type="text"
                placeholder="description"
                onChange={(event) => {
                    setDescription(event.target.value);
                }}
            />
            <button
                onClick={() => {
                    createTask({
                        variables: {
                            name: name,
                            description: description,
                        },
                    });
                }}
            >
                Create Task
            </button>
        </div>
    );
}

export default CreateTask;
