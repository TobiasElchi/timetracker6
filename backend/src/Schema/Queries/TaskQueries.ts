import { GraphQLList } from "graphql";

import {TaskEntity} from "../../Entities/TaskEntity";
import {TaskType} from "../TypeDefs/TaskType";

//Queries => Read only

export const GET_ALL_TASKS = {
  type: new GraphQLList(TaskType),
  //TODO: Interface
  resolve()/*:Promise<InterfaceUser[]>*/ {
    return TaskEntity.find();
  },
};
