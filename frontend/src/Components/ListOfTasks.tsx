import React from "react";
import {GET_ALL_TASKS} from "../Graphql/Queries";
import {DELETE_TASK} from "../Graphql/MutationsTask";
import {useQuery, useMutation} from "@apollo/client";
import ListOfTrackingsByTask from "./ListOfTrackingsByTask";
import AddTrackingToTask from "./AddTrackingToTask";
import ListOfLabelsByTask from "./ListOfLabelsByTask";
import AddLabelToTask from "./AddLabelToTask";

function ListOfTasks() {
    const {data, refetch} = useQuery(GET_ALL_TASKS, {
        pollInterval:500
    });
    const [deleteTask, {}] = useMutation(DELETE_TASK);
    return (
        <div>
            {data &&
            data.getAllTasks.map((task: any) => {
                return (
                    <div>
                        <div className="Separator"/>
                        <div className="TaskBox">
                            {task.name}
                            <ListOfLabelsByTask{...task}/>
                            <AddLabelToTask{...task}/>
                        </div>
                        <button
                            onClick={() => {
                                deleteTask({variables: {id: task.id}});
                                refetch()
                            }}
                        > Delete Task
                        </button>
                        <li>{task.description}</li>
                        <li>Created: {task.timestampCreated}</li>
                        <li>Updated: {task.timestampUpdated}</li>
                        <li>ID: {task.id}</li>
                        <li></li>
                        <div>Trackings of this Task:</div>
                        <AddTrackingToTask{...task}/>
                        <ListOfTrackingsByTask{...task}/>
                    </div>
                );
            })}
        </div>
    );
}

export default ListOfTasks;
