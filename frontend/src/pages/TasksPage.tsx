import * as React from "react";
import CreateTask from "../Components/CreateTask";
import ListOfTasks from "../Components/ListOfTasks";
import ListOfTrackingsByTask from "../Components/ListOfTrackingsByTask";

export const TasksPage = () => {
    return (
        <div style={{ display: "flex" }}>
            <div style={{ flex: "2" }}>
                <h1>Tasks</h1>
                <CreateTask />
                <ListOfTasks />
            </div>
        </div>
    );
};