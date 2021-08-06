import React from "react";
import {GET_ALL_TASKS} from "../Graphql/Queries";
import {DELETE_TASK, UPDATE_TASKNAME} from "../Graphql/Mutations";
import {useQuery, useMutation} from "@apollo/client";

function ListOfTasks() {
    const {data} = useQuery(GET_ALL_TASKS);
    const [deleteTask, {}] = useMutation(DELETE_TASK);
    const [updateTaskName, {error}] = useMutation(UPDATE_TASKNAME);

    return (
        <div>
            {data &&
            data.getAllTasks.map((task: any) => {
                return (
                    <div>
                        <h2>{task.name}</h2>
                        <button
                            onClick={() => {
                                deleteTask({variables: {id: task.id}});
                            }}
                        > Delete Task
                        </button>
                        <button
                            onClick={() => {
                                updateTaskName({variables: {name: "updatedTask", id: task.id}});
                            }}
                        > Update Taskname
                        </button>
                        Created: {task.timestampCreated} Updated: {task.timestampUpdated}
                    </div>
                );
            })}
        </div>
    );
}

export default ListOfTasks;
