import React from "react";
import {useQuery, useMutation} from "@apollo/client";
import {GET_ALL_LABELS_BY_TASKID} from "../Graphql/Queries";
import {TaskEntity} from "../../../backend/src/Entities/TaskEntity";
import {DELETE_LABEL} from "../Graphql/MutationsLabel";

function ListOfLabelsByTask(task: TaskEntity) {
    const {data, refetch} = useQuery(GET_ALL_LABELS_BY_TASKID, {
        variables: {
            taskid: task.id,
        },
    });

    const [deleteLabel, {}] = useMutation(DELETE_LABEL);

    return (
        <div className="LabelAsPartOfTask">
            {data &&
            data.getAllLabelsByTaskID.map((label: any) => {
                return (
                    <div >
                        <div className="LabelBoxAsPartOfTask">{label.name}
                        <button className="miniButton" id={label.id}
                                onClick={() => {
                                    deleteLabel({variables: {id: label.id}});
                                    refetch()
                                }}
                        > X
                        </button>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default ListOfLabelsByTask;
