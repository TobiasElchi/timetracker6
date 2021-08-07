import React from "react";
import {GET_ALL_TASKS} from "../Graphql/Queries";
import {DELETE_TASK} from "../Graphql/MutationsTask";
import {useQuery, useMutation} from "@apollo/client";
import ListOfTrackingsByTask from "./ListOfTrackingsByTask";

function ListOfTasks() {
    const {data} = useQuery(GET_ALL_TASKS, {
        pollInterval: 500
    });
    const [deleteTask, {}] = useMutation(DELETE_TASK);
    return (
        <div>
            {data &&
            data.getAllTasks.map((task: any) => {
                return (
                    <div>
                        <div className="Separator"/>
                        <div className="TaskBox">Task {task.id}: {task.name}</div>
                        <button
                            onClick={() => {
                                deleteTask({variables: {id: task.id}});
                            }}
                        > Delete Task
                        </button>
                        <li>Created: {task.timestampCreated}</li>
                        <li>Updated: {task.timestampUpdated}</li>
                        <li>ID: {task.id}</li>
                        <li></li>
                        <div>Trackings of this Task:</div>
                        <ListOfTrackingsByTask{...task}/>
                    </div>
                );
            })}
        </div>
    );
}

export default ListOfTasks;
