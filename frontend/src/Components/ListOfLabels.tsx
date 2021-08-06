import React from "react";
import {GET_ALL_LABELS} from "../Graphql/Queries";
import {DELETE_LABEL, UPDATE_LABELNAME} from "../Graphql/Mutations";
import {useQuery, useMutation} from "@apollo/client";

function ListOfLabels() {
    const {data} = useQuery(GET_ALL_LABELS);
    const [deleteLabel, {}] = useMutation(DELETE_LABEL);
    const [updateLabelName, {error}] = useMutation(UPDATE_LABELNAME);

    return (
        <div>
            {data &&
            data.getAllLabels.map((label: any) => {
                return (
                    <div>
                        <h2>{label.name}</h2>
                        <button
                            onClick={() => {
                                deleteLabel({variables: {id: label.id}});
                            }}
                        > Delete Label
                        </button>
                        <button
                            onClick={() => {
                                updateLabelName({variables: {name: "updatedLabel", id: label.id}});
                            }}
                        > Update Labelname
                        </button>
                        Created: {label.timestampCreated} Updated: {label.timestampUpdated}
                    </div>
                );
            })}
        </div>
    );
}

export default ListOfLabels;
