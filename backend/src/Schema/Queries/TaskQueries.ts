import { GraphQLList } from "graphql";
import {TaskType} from "../TypeDefs/types";
import {TaskEntity} from "../../Entities/TaskEntity";

//Queries => Read only

export const GET_ALL_TASKS = {
  type: new GraphQLList(TaskType),
  //TODO: Interface
  resolve()/*:Promise<InterfaceUser[]>*/ {
    return TaskEntity.find();
  },
};
