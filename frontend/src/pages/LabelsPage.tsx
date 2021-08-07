import * as React from "react";
import CreateLabel from "../Components/CreateLabel";
import ListOfLabels from "../Components/ListOfLabels";

export const LabelsPage = () => {
    return (
        <div style={{display: "flex"}}>
            <div style={{flex: "2"}}>
                <h1>Labels</h1>
                <CreateLabel/>
                <ListOfLabels/>
            </div>
        </div>
    );
};