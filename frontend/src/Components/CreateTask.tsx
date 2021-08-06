import React, {useState} from "react";
import {CREATE_TASK} from "../Graphql/Mutations";
import {useMutation} from "@apollo/client";

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
