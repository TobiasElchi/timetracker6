import {GraphQLList} from "graphql";

import {TaskEntity} from "../../Entities/TaskEntity";
import {TaskType} from "../TypeDefs/TaskType";

//Queries => Read only

export const GET_ALL_TASKS = {
    type: new GraphQLList(TaskType),
    resolve() {
        return TaskEntity.find();
    },
};
