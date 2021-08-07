import React from "react";
import {GET_ALL_LABELS} from "../Graphql/Queries";
import {DELETE_LABEL, UPDATE_LABELNAME} from "../Graphql/MutationsLabel";
import {useQuery, useMutation} from "@apollo/client";

function ListOfLabels() {
    const {data} = useQuery(GET_ALL_LABELS, {
        pollInterval: 500,
    });
    const [deleteLabel, {}] = useMutation(DELETE_LABEL);
    const [updateLabelName, {error}] = useMutation(UPDATE_LABELNAME);

    return (
        <div>
            {data &&
            data.getAllLabels.map((label: any) => {
                return (
                    <div>
                        <div className="Separator"/>
                        <div className="LabelBox">{label.name}</div>
                        <button
                            onClick={() => {
                                deleteLabel({variables: {id: label.id}});
                            }}
                        > Delete Label
                        </button>
                        {/*<button
                            onClick={() => {
                                updateLabelName({variables: {name: "updatedLabel", id: label.id}});
                            }}
                        > Update Labelname
                        </button>*/}
                        <li>Created: {label.timestampCreated}</li>
                        <li>Updated: {label.timestampUpdated}</li>
                    </div>
                );
            })}
        </div>
    );
}

export default ListOfLabels;
