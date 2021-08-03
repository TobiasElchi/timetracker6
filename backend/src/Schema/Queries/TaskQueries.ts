import { GraphQLList } from "graphql";
import {TaskType} from "../TypeDefs/types";
import {Tasks} from "../../Entities/Tasks";

//Queries => Read only

export const GET_ALL_TASKS = {
  type: new GraphQLList(TaskType),
  //TODO: Interface
  resolve()/*:Promise<InterfaceUser[]>*/ {
    return Tasks.find();
  },
};
