import React, {useState} from "react";
import {useMutation} from "@apollo/client";
import {CREATE_LABEL} from "../Graphql/MutationsLabel";

function CreateLabel() {
    const [name, setName] = useState("");
    const [createTask, {error}] = useMutation(CREATE_LABEL);

    return (
        <div className="createLabel">
            <input
                type="text"
                placeholder="name"
                onChange={(event) => {
                    setName(event.target.value);
                }}
            />
            <button
                onClick={() => {
                    createTask({
                        variables: {
                            name: name,
                        },
                    });
                }}
            >
                Create Label
            </button>
        </div>
    );
}

export default CreateLabel;
