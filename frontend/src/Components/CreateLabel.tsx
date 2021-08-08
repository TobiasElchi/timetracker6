import React, {useState} from "react";
import {useMutation} from "@apollo/client";
import {CREATE_LABEL} from "../Graphql/MutationsLabel";
import {showSnackbar} from "./ShowSnackbar";

function CreateLabel() {
    const [name, setName] = useState("");
    const [createTask, {error}] = useMutation(CREATE_LABEL);
    return (
        <div className="createLabel">
            <input
                id={"InputfieldCreateLabel"}
                type="text"
                placeholder="name"
                onChange={(event) => {
                    setName(event.target.value);
                }}
            />
            <button
                onClick={() => {
                    if (name.length>0) {
                        createTask({
                            variables: {
                                name: name,
                            },
                        });
                    }else {
                        // @ts-ignore
                        document.getElementById("InputfieldCreateLabel").focus()
                        showSnackbar(document.getElementById("snackbar"))
                    }
                }}
            >
                Create Label
            </button>
            <div id="snackbar">{"Please fill out all Information"}</div>
        </div>
    );
}

export default CreateLabel;