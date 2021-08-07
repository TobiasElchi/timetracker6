import React from "react";
import {GET_ALL_TASKS} from "../Graphql/Queries";
import {DELETE_TASK, UPDATE_TASKNAME} from "../Graphql/MutationsTask";
import {useQuery, useMutation} from "@apollo/client";
import ListOfTrackingsByTask from "./ListOfTrackingsByTask";

function ListOfTasks() {
    const {data} = useQuery(GET_ALL_TASKS, {
        pollInterval: 500
        });
    const [deleteTask, {}] = useMutation(DELETE_TASK);
    const [updateTaskName, {error}] = useMutation(UPDATE_TASKNAME);
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
                        <ListOfTrackingsByTask{..."3"}/>
                    </div>
                );
            })}
        </div>
    );
}

export default ListOfTasks;
