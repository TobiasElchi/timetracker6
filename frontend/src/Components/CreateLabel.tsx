import React, { useState } from "react";
import { CREATE_LABEL } from "../Graphql/Mutation";
import { useMutation } from "@apollo/client";
function CreateLabel() {
  const [name, setName] = useState("");
  const [createUser, { error }] = useMutation(CREATE_LABEL);

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
          createUser({
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
