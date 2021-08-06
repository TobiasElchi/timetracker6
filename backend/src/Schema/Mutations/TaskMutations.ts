import { GraphQLID, GraphQLString } from "graphql";
import { MessageType } from "../TypeDefs/Messages";
import {TaskEntity} from "../../Entities/TaskEntity";
import {TaskType} from "../TypeDefs/types";

//Mutations => Create,Update,Delete
export const CREATE_TASK = {
  type: TaskType,
  args: {
    name: { type: GraphQLString },
    description: { type: GraphQLString },
  },
  async resolve(parent: any, args: any) {
    const { name, description } = args;
    const timeElapsed = Date.now()
    const currentTime = new Date (timeElapsed).toUTCString()
    await TaskEntity.insert({ name,description, timestampCreated: currentTime, timestampUpdated: currentTime });
    return args;
  },
};

export const UPDATE_TASKNAME = {
  type: MessageType,
  args: {
    name: { type: GraphQLString },
    id: { type: GraphQLID },
    timestampUpdated: { type: GraphQLString },
  },
  async resolve(parent: any, args: any) {
    const { name, id} = args;
    const task = await TaskEntity.findOne({id: id});
    if (!task) {
      throw new Error("TASK NOT FOUND");
    }
    const taskID = task?.id;
    await TaskEntity.update({ id: id }, { name: name });
    //Automatically update the timestamp
    const timeElapsed = Date.now()
    const currentTime = new Date (timeElapsed).toUTCString()
    await TaskEntity.update({ id: id }, {timestampUpdated: currentTime});
    return { successful: true, message: "TASKNAME UPDATED" };
  },
};

export const UPDATE_TASK_DESCRIPTION = {
  type: MessageType,
  args: {
    description: { type: GraphQLString },
    id: { type: GraphQLID },
    timestampUpdated: { type: GraphQLString },
  },
  async resolve(parent: any, args: any) {
    const { description, id} = args;
    const task = await TaskEntity.findOne({id: id});
    if (!task) {
      throw new Error("TASK NOT FOUND");
    }
    const taskID = task?.id;
    await TaskEntity.update({ id: id }, { description: description });
    //Automatically update the timestamp
    const timeElapsed = Date.now()
    const currentTime = new Date (timeElapsed).toUTCString()
    await TaskEntity.update({ id: id }, {timestampUpdated: currentTime});
    return { successful: true, message: "TASK DESCRIPTION UPDATED" };
  },
};

export const DELETE_TASK = {
  type: MessageType,
  args: {
    id: { type: GraphQLID },
  },
  async resolve(parent: any, args: any) {
    const id = args.id;
    await TaskEntity.delete(id);
    return { successful: true, message: "TASK DELETED" };
  },
};
